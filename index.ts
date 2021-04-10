import express from 'express';
import { rootRouter } from './route';

const app = express();

app.use(express.json());
app.use('/', rootRouter);
app.listen(8080, () => console.log('Server running on port 8080'));
