
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {
        const { slug } = req.query;

        const blogs_sql = 'select * from blogs where seo_url =?';

        
        const params = [slug];

        const blogdetail_response = await query({ query: blogs_sql, values: params });
      //    console.log(blogdetail_response)
        res.status(200).json({ blogdetail_response });

    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}
