
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { typeofbooks } = req.query;

        const sql = 'SELECT * FROM `trading_ebooks` where status=1 and book_type=? ORDER BY `trading_ebooks`.`id` DESC';

        const params = [typeofbooks];

        const ebook_response = await query({ query: sql, values: params });
        //   console.log(blogs_response)
        res.status(200).json({ ebook_response });

    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}

