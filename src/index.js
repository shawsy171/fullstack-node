import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import data from './testData.json';
console.log(data);

ReactDOM.render(
  <App contests={ data.contests } />,
  document.getElementById('root')
);
