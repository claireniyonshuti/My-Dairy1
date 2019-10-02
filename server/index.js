import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/entryRoutes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 2000;
app.use('/', router);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

export default app;