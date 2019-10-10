import { pool } from '../../Database/services/db';


const getOneEntry = async(req, res) => {
    // const entryId = dairyEntry.find(i=>i.id == parseInt(req.params.id, 10));

    
    // pool.connect((err, client, done) => {
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
  //     client.query(query, (error, result) => {
  //       done();
  //     if (entryId) {
  //       return res.status(200).send({
  //         status: 200,
  //         message: 'Entry retrieved successfully',
  //         data: entryId,
  //       });
  //     } 
  //     if(!entryId){
  //       return res.status(404).send({
  //           status: 404,
  //           message: 'Entry does not exist',
  //          });
  //     }
  //   });
  // });
    // });
  // }

    
export default getOneEntry;
  