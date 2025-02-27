import { query } from '@/lib/db';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    try {
        const { name, number, age, email, qualification, address, profession, experience, learningMode } = req.body;

        // Validate user existence
        const validate_user_sql = "SELECT COUNT(1) exist FROM registration WHERE ( email = ? || mobile =?) LIMIT 1";
        const validate_user_params = [email, number];
        const validate_user_response = await query({ query: validate_user_sql, values: validate_user_params });

        const exist = (validate_user_response.length > 0) ? validate_user_response[0]["exist"] : 0;

        if (!exist) {
            // Insert registration details into the database
            const reg_forms_sql = `
            INSERT INTO registration 
            (name, email, mobile, age, qualification, address, profession, trading_experience, learning_mode) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

            const params = [name, email, number, age, qualification, address, profession, experience, learningMode];

             const reg_forms_response = await query({ query: reg_forms_sql, values: params });

             const reg_id = reg_forms_response.insertId;

            // Update reg_student_id with SB00{reg_id}
            const update_sql = `UPDATE registration SET reg_student_id = CONCAT('SB00', ?) WHERE reg_id = ?`;

            await query({ query: update_sql, values: [reg_id, reg_id] });



            if (reg_forms_response.affectedRows > 0) {
                const registrationID = reg_forms_response.insertId; // Assuming this is your inserted ID



                // Email sending logic using nodemailer
                const transporter = nodemailer.createTransport({
                    host: 'mail.stockbrain.in',
                    port: 587, // Port for STARTTLS
                    secure: false, // Use TLS
                    auth: {
                        user: 'info@stockbrain.in',
                        pass: '=gn=Uq4R_4$l',
                    },
                    tls: {
                        rejectUnauthorized: false, // Use this if you have a self-signed certificate
                    },
                });

                // Email to owner
                const mailOptionsForOwner = {
                    from: 'info@stockbrain.in',
                    to: 'sanjeevjustnoida@gmail.com',
                    subject: '🚀 New User Registration on StockBrain!',
                    text: `
                        🎉 A new member has joined the StockBrain family!

                        Here are the details:

                        Name: ${name}
                        Email: ${email}
                        Mobile: ${number}
                        Registration ID: SB00${registrationID}

                        Please follow up and welcome them to the community.
                    `,
                };

                // Email to the user
                const mailOptionsForUser = {
                    from: 'info@stockbrain.in',
                    to: email,
                    subject: `🎉 Welcome to StockBrain, ${name}!`,
                    text: `
                        Hi ${name},

                        Welcome to StockBrain! We're thrilled to have you on board.

                        🚀 Here's your Registration ID: SB00${registrationID}

                        Our team will be in touch soon with more details about your learning journey. If you have any questions, feel free to reach out to us at info@stockbrain.in or call us at 9990799940.

                        Best regards,
                        StockBrain Team
                    `,
                };

                // Send emails
                await transporter.sendMail(mailOptionsForOwner);
                await transporter.sendMail(mailOptionsForUser);

                // Respond with a successful registration and email status
                res.status(200).json({ result: { status: 200, id: registrationID, msg: "Registration successful. Please check your Email" } });
            } else {
                res.status(404).json({ result: { status: 404, msg: "Something went wrong during registration." } });
            }
        } else {
            res.status(403).json({ result: { status: 403, msg: "User already registered. Please use a different email or phone number." } });
        }
    } catch (error) {
        console.error('Error during registration or email sending:', error);
        res.status(500).json({ result: { status: 500, msg: error.message } });
    }
}
