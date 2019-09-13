import express  from 'express';
import getAllEntries from '../controler/allEntries';
import getOneEntry from '../controler/getone';
import postEntry from '../controler/postEntry';


const router = express.Router();

router.get ('/api/v1/entries', getAllEntries);
router.get('/api/v1/entries/:id', getOneEntry);
router.post('/api/v1/entries', postEntry);

export default router;