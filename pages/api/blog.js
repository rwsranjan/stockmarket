
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        // const {} = req.query;

        const blogs_sql = 'SELECT * FROM blogs ORDER BY blog_date DESC';

        // const params = [name, email, mobile, message];
 
        const blogs_response = await query({ query: blogs_sql }); //, values: params
     //   console.log(blogs_response)
        res.status(200).json({ blogs_response });

    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}

