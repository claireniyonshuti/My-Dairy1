import { pool } from '../../Database/services/db';

const getAllEntries = async(req, res) => {

    
    const query = 'SELECT * FROM DiaryEntry';
    const result = await pool.query(query);
    
    res.status(200).json({
      status: 200,
      message: 'Retrieved successfully',
      DairyEntry: result.rows,
    });
   
  };

export default getAllEntries;

