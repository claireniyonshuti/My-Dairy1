import entryvalidation from '../validation';
import { pool } from '../../Database/services/db';

const postEntry = async(req, res) => {
  const { error } = entryvalidation.validate(req.body);

const eDate = new Date();

   const {
       eTitle,
       posted,
       viewed,
       eContent,
   } = req.body;

  
   const query = 'INSERT INTO DiaryEntry(entry_title,entry_date,entry_view,entry_post,entry_content) VALUES($1,$2,$3,$4,$5) RETURNING *';
   const values = [eTitle, eDate, viewed, posted, eContent];
   
   const result = await pool.query(query, values);
   return res.status(201).send({
       status: 201,
       message: 'Successful insert',
       data: result.rows[0],
   });
  };

  export default postEntry;