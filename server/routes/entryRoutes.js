import express  from 'express';
import getAllEntries from '../controler/allEntries';
import getOneEntry from '../controler/getone';


const router = express.Router();

router.get ('/api/v1/entries', getAllEntries);
router.get('/api/v1/entries/:id', getOneEntry);

export default router;