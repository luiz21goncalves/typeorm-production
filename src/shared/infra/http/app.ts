import 'reflect-metadata';

import cors from 'cors';
import express from 'express';

import '../../../database';

const app = express();

app.use(express.json());
app.use(cors());

export { app };
