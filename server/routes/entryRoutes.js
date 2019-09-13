import express  from 'express';
import getAllEntries from '../controler/allEntries';


const router = express.Router();

router.get ('/api/v1/entries', getAllEntries);

export default router;