import dairyEntry from "../model/dairy";


const getOneEntry = (req, res) => {
    const entryId = dairyEntry.find(i=>i.id == parseInt(req.params.id, 10));
      if (entryId) {
        return res.status(200).send({
          status: 200,
          message: 'Entry retrieved successfully',
          data: entryId,
        });
      } 
      if(!entryId){
        return res.status(404).send({
            status: 404,
            message: 'Entry does not exist',
           });
      }
    }
export default getOneEntry;
  