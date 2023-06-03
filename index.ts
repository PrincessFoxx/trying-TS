import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {HomeController} from "./Routes/HomeController";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', new HomeController().getIndex);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));