import 'reflect-metadata'

import express from 'express'
import cors from 'cors'

const app = express()

import './database'

app.use(express.json())
app.use(cors())

export { app }
