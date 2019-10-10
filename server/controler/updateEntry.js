import dairyEntry from '../model/dairy';
import entryvalidation from '../validation';

const updateEntry = (req, res) => {
    const id = parseInt(req.params.id, 10);

    let modifyFound;
    let itemIndex;
 
    dairyEntry.map((dairy, index) => {
      if (dairy.id === id) {
        const { error } = entryvalidation.validate(req.body);
if (error) {
return res.status(400).json({ status: 400, error: error.details[0].message });
}
        modifyFound = dairy;
        itemIndex = index;
      }
    });
  
    if (!modifyFound) {
      return res.status(404).send({
        status: 404,
        message: 'Entry not found',
      });
    }
  
    if (!req.body.title) {
      return res.status(400).send({
        status: 400,
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        status: 400,
        message: 'description is required',
      });
    }
  
    const modifiedEntry = {
      id: modifyFound.id,
      title: req.body.title || modifyFound.title,
      description: req.body.description || modifyFound.description.trim(),
    };


  
    dairyEntry.splice(itemIndex, 1, modifiedEntry);
    dairyEntry = dairyEntry.trim();

  
    return res.status(201).send({
      status: 200,
      message: 'Entry modified successfully',
      modifiedEntry,
    });
  };

  export default updateEntry;

 