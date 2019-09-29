import express  from 'express';
import getAllEntries from '../controler/allEntries';
import getOneEntry from '../controler/getone';
import postEntry from '../controler/postEntry';
import updateEntry from '../controler/updateEntry';
import deleteEntry from '../controler/deleteEntry';

const router = express.Router();

router.get ('/api/v1/entries', getAllEntries);
router.get('/api/v1/entries/:id', getOneEntry);
router.post('/api/v1/entries', postEntry);
router.put('/api/v1/entries/:id', updateEntry);
router.delete('/api/v1/entries/:id',deleteEntry);

export default router;