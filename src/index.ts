import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Database from './config/db';
import morgan from 'morgan';
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 6066;
const mongo_connection_string = process.env.MONGODB_CONNECTION_STRING as string;
const mongoDB = new Database(mongo_connection_string);

app.use(express.json());
app.use(morgan('combined'));

mongoDB.Connect();
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️⚡️⚡️[server]: Server is running at http://localhost:${port}`);
});
