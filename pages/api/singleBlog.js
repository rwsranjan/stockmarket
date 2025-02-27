
import { query } from '@/lib/db';

export default async function handler(req, res) {
    try {

        const blogs_sql = 'SELECT * FROM `blogs` ORDER BY `blogs`.`blog_id` DESC LIMIT 1';

        const blogs_response = await query({ query: blogs_sql }); 

        const blogs_sql2 = 'SELECT * FROM `blogs` ORDER BY `blogs`.`blog_id` DESC LIMIT 1,2';

        const blogs_response2 = await query({ query: blogs_sql2 }); 

        
        res.status(200).json({ result:{blogs_response , blogs_response2} });

    } catch (error) {
        res.status(500).json({ result: { status: 0, msg: error.message } });
    }
}
