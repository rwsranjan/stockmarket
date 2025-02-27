import nodemailer from "nodemailer";
import { query } from "@/lib/db";
import sha1 from "sha1";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email, otp, passwrd } = req.body;

    // Validate required fields
    if (!email || !otp || !passwrd) {
        return res.status(400).json({ error: "Email, OTP, and password are required" });
    }

    try {
        // Validate user existence
        const validate_user = `
            SELECT COUNT(1) as exist 
            FROM frontend_master_login 
            WHERE u_email = ? AND user_verified = ? AND passwrd = ? 
            LIMIT 1
        `;
        const validate_user_params = [email, 1, sha1(passwrd)];
        const validate_user_response = await query({ query: validate_user, values: validate_user_params });

        const exist = validate_user_response[0]?.exist || 0;

        if (!exist) {
            return res.status(401).json({ error: "Invalid credentials or account not verified" });
        }

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "mail.stockbrain.in",
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.SMTP_USER || "info@stockbrain.in",
                pass: process.env.SMTP_PASS || "=gn=Uq4R_4$l",
            },
            tls: {
                rejectUnauthorized: false, // Use this if you have a self-signed certificate
            },
        });

        const mailOptions = {
            from: "StockBrain <it@stockbrain.in>",
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}. It is valid for 2 minutes.`,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "OTP sent successfully!" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}
