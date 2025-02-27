import { query } from '@/lib/db';
import sha1 from "sha1";

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { name, email, number, passwrd } = req.body;

        // Check if the email is already registered
        const checkEmailSql = 'SELECT COUNT(*) AS count FROM `frontend_master_login` WHERE `u_email` = ?';
        const checkEmailResponse = await query({ query: checkEmailSql, values: [email] });

        if (checkEmailResponse[0].count > 0) {
            return res.status(400).json({ status: 0, msg: "Email already registered" });
        }

        // Insert new user if email is not found
        const signin_sql = 'INSERT INTO `frontend_master_login` (`u_name`,`u_email`,`c_number`,`passwrd`) VALUES (?,?,?,?)';
        const params = [name, email, number, sha1(passwrd)];

        const signin_response = await query({ query: signin_sql, values: params });

        if (signin_response.affectedRows > 0) {
            return res.status(200).json({ result: signin_response.insertId, msg: "Thank You for Registering" });
        } else {
            return res.status(500).json({ result: { status: 0, msg: "Something went wrong" } });
        }
    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}
