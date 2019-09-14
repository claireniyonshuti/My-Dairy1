import dairyEntry from '../model/dairy';

const updateEntry = (req, res) => {
    const id = parseInt(req.params.id, 10);
    let modifyFound;
    let itemIndex;
    dairyEntry.map((dairy, index) => {
      if (dairy.id === id) {
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
      description: req.body.description || modifyFound.description,
    };
  
    dairyEntry.splice(itemIndex, 1, modifiedEntry);
  
    return res.status(201).send({
      status: 200,
      message: 'Entry modified successfully',
      modifiedEntry,
    });
  };

  export default updateEntry;