import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from './src/components/App';
import config from './config';

/**
 * create the react app to be rendered
 * @return {promise} react App rendered to a string
 */
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then((res) => {
      // console.log(res.data);
      return ReactDOMServer.renderToString(
        <App initialContests={ res.data.contests }/>
      );
    });


export default serverRender;
