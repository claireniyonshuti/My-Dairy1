import express  from 'express';
import getAllEntries from '../controler/allEntries';
import getOneEntry from '../controler/getone';
import postEntry from '../controler/postEntry';
import updated from '../controler/updateEntry';
import deleteEntry from '../controler/deleteEntry';
import { register } from '../registervalidation';


const router = express.Router();

router.get ('/api/v1/entries', getAllEntries);
router.get('/api/v1/entries/:id', getOneEntry);
router.post('/api/v1/entries', postEntry);
router.put('/api/v1/entries/:id', updated);
router.delete('/api/v1/entries/:id',deleteEntry);
router.post('/api/v1/regist', function(req,res) {register});



export default router;