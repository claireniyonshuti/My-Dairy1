import entryvalidation from '../validation'
import { pool } from '../../Database/services/db';

const updated =async(req, res) => {
  const { error } = entryvalidation.validate(req.body);
  if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message });
  }
const { 
  entry_Title, 
  entry_post, 
  entry_view, 
  entry_Content,
} = req.body;
const query = 'UPDATE DiaryEntry SET entry_title = $1, entry_view = $2, entry_post = $3, entry_content = $4 WHERE entry_id = $5 RETURNING *';
const values = [entry_Title, entry_view, entry_post, entry_Content, parseInt(req.params.id)];
const update = await pool.query(query, values);
if (update.rows === 1) {
  res.status(404).json({
      status: 404,
      message: 'Entry not found'
  });
}
else {
  res.status(200).json({
      status: 200,
      message: 'Entry updated',
      data: update.rows[0]
  });
}
};

  export default updated;

 