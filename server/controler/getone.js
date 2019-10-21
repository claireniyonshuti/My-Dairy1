import { pool } from '../../Database/services/db';

const getOneEntry = async(req, res) => {
    
      const entry_id = parseInt(req.params.id);
      const value = [entry_id];
      const query = 'SELECT * FROM DiaryEntry WHERE entry_id = $1';
      const result = await pool.query(query, value);
    
      res.status(200).json({
        status: 200,
        message: 'Retrieved successfully',
        DairyEntry: result.rows,
      });
     
    };


    
export default getOneEntry;
  