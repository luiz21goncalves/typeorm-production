import 'reflect-metadata';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { createDatabaseConnection } from '../../../database';
import { routes } from './routes';

dotenv.config();
createDatabaseConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello Word',
  });
});

export { app };
