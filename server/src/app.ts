import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

export { app };
