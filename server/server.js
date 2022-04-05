import express, { json } from 'express';
const server = express();

import cors from 'cors';
import controller from './controllers/comments-controllers';

server.use(cors());
server.use(json());
server.use('/api' , controller);

server.listen(3000,() => console.log('node is running'));