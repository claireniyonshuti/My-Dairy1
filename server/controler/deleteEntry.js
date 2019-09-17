import dairyEntry from '../model/dairy';

const deleteEntry = (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    dairyEntry.map((dairy, index) => {
      if (dairy.id === id) {
         dairyEntry.splice(index, 1);
         return res.status(200).send({
           status: 200,
           message: 'Entry successful deleted',
         });
      }
    });
  
  
      return res.status(404).send({
        status: 400,
        message: 'Entry not found',
      }); 
      
  };

  export default deleteEntry;
  