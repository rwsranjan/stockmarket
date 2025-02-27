import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { regID } = req.body;

        // Fetch user details if registered
        const user_sql = "SELECT * FROM registration WHERE reg_student_id = ?";
        const user_params = [regID];
        const user_response = await query({ query: user_sql, values: user_params });

        if (user_response.length === 0) {
            return res.status(403).json({ result: { status: 403, msg: "User is not registered. Please Register." } });
        }

        return res.status(200).json({ 
            result: { 
                status: 200, 
                isRegistered: true, 
                userData: user_response[0], 
                msg: "User data is available." 
            } 
        });

    } catch (error) {
        return res.status(500).json({ result: { status: 500, msg: error.message } });
    }
}
