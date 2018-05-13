import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import config from './config.js';
import apiRouter from './api/index';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'scss'),
  dest: path.join(__dirname, 'public'),
}));
console.log(path.join(__dirname, 'scss'));
// express.static(path.join(__dirname, 'public'));
// server.use('/public', express.static(path.join(__dirname, 'public')));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Loading....',
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Listening on Port: ', config.port);
});

