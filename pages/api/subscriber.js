
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { name, email } = req.query;

        const validate_subscriber_sql = "SELECT COUNT(1) exist FROM subscriber WHERE ( email = ?) LIMIT 1";
        const validate_subscriber_params = [email];
        const validate_subscriber_response = await query({ query: validate_subscriber_sql, values: validate_subscriber_params });
        const exist = (validate_subscriber_response.length > 0) ? validate_subscriber_response[0]["exist"] : 0;
       // console.log(validate_subscriber_response)

        if (!exist) {
            const subscriber_sql = 'INSERT INTO `subscriber` ( `s_name`,`email`) VALUES (?,?)';

            const params = [name, email];

            const subscriber_response = await query({ query: subscriber_sql, values: params });
            console.log(subscriber_response)
            subscriber_response.affectedRows > 0
                ? res.status(200).json({ result:{ status: 200, msg: "Thank You"} })
                : res.status(404).json({ result: { status: 400, msg: "Something went wrong" } });
        }
        else {
            res.status(403).json({ result: { status: 403, msg: "This Email ID has been registered." } });
        }
    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}
