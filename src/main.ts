import index from './routes/index';
import vote from './routes/vote';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();


app.use('/', index);
app.use('/vote', vote)

// Port's default value is 3000.
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));