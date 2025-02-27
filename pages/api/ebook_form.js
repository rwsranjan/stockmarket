
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { firstname, lastname, email, mobile } = req.query;

        const validate_user_sql = "SELECT COUNT(1) exist FROM ebook_download_visitors WHERE ( email = ? || mobilenumber =?) LIMIT 1";
        const validate_user_params = [email, mobile];

        const validate_user_response = await query({ query: validate_user_sql, values: validate_user_params });

        const exist = (validate_user_response.length > 0) ? validate_user_response[0]["exist"] : 0;

        if (!exist) {
            const ebook_forms_sql = 'INSERT INTO `ebook_download_visitors` ( `firstname`,`lastname`,`email`,`mobilenumber`) VALUES (?,?,?,?)';

            const params = [firstname, lastname, email, mobile];

            const ebook_forms_response = await query({ query: ebook_forms_sql, values: params });

            ebook_forms_response.affectedRows > 0
                ? res.status(200).json({ result: { status: 200, id: ebook_forms_response.insertedid, msg: "You Can Download The Books.." } })
                : res.status(404).json({ result: { status: 404, msg: "Something went wrong" } }); x
        }
        else {
            res.status(403).json({ result: { status: 403, msg: "Registered User.You can Do Download Free Content..." } });
        }
    } catch (error) {
        res.status(500).json({ result: { status: 500, msg: error.message } });
    }
}
