import dairyEntry from '../model/dairy';


const postEntry = (req, res) => {
    if(!req.body.title) {
      return res.status(400).send({
        status: 400,
        message: 'title is required'
      });
    } else if(!req.body.description) {
      return res.status(400).send({
        status: 400,
        message: 'description is required'
      });
    }
   const dairy = {
     id: dairyEntry.length + 1,
     title: req.body.title,
     description: req.body.description
   }
   dairyEntry.push(dairy);
   return res.status(200).send({
     status: 200,
     message: 'Entry added successfully',
     data: dairy
   })
  };

  export default postEntry;