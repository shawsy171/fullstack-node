import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import config from './config.js';
import apiRouter from './api/index';
import serverRender from './serverRender';

const server = express();

// parse scss to css
server.use(sassMiddleware({
  src: path.join(__dirname, 'scss'),
  dest: path.join(__dirname, 'public'),
}));

// setup static views
server.set('view engine', 'ejs');

server.use('/api', apiRouter);

// entry point for the App
server.get('/', (req, res) => {
  serverRender()
    .then((content) => {
      res.render('index', {
        content,
      });
    })
    .catch(console.error);
});

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Listening on Port: ', config.port);
});

