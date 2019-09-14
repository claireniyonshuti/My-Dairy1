import dairyEntry from "../model/dairy";

const getAllEntries =(req, res) => {
    res.status(200).json({
      status: 'true',
      message: 'Retrieved successfully',
      data: dairyEntry,
    })
  };

export default getAllEntries;

