import 'reflect-metadata';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import '../../../database';
import { routes } from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

export { app };
