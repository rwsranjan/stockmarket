
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { name, email, mobile, message , questiontype , country} = req.query;

        const contactus_sql = 'INSERT INTO `inquiry_details` ( `name`,`email`,`mobile`,`messege`,`country`,`question_type`) VALUES (?,?,?,?,?,?)';

        const params = [name, email, mobile, message, country, questiontype];

        const contact_us_response = await query({ query: contactus_sql, values: params });

        contact_us_response.affectedRows > 0
            ? res.status(200).json({ result: contact_us_response.insertedid, msg: "Thank You for Contacting" })
            : res.status(404).json({ result: { status: 0, msg: "Something went wrong" } });
    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}
