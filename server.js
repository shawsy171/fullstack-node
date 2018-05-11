import config from './config.js';
import apiRouter from './api/index';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: ' this is a content <h1>string</h1>',
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Listening on Port: ', config.port);
});

