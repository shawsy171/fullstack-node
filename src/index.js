import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/app';

/**
 * [data-reactroot] is created by
 * the server side rendering in serverRender.js
 */
axios.get('/api/contests')
  .then((res) => {
    ReactDOM.render(
      <App initialContests={ res.data.contests }/>,
      document.querySelector('[data-reactroot]')
    );
  })
  .catch((err) => {
    console.error('App Error: ', err);
  });

