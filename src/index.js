import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/app';

const query = window.location.pathname.split('/')[2];
console.log('query', query);

/**
 * Returns the needed url
 * @param { number } contestId
 * @return { string }
 */
const getApiUrl = (contestId) => contestId ?
  `/api/contests/${contestId}` :
  `/api/contests`;

/**
 * Get a list of contests or a single contest
 * @param { number } contestId
 * @param { object } apiData
 * @return { object }
 */
const getInitalData = (contestId, apiData) => {
  return contestId ?
    {
      currentContestId: contestId,
      contests: {
        [contestId]: apiData.contest,
      },
    } :
    { contests: apiData.contests };
};

console.log(getApiUrl(query));
/**
 * [data-reactroot] is created by
 * the server side rendering in serverRender.js
 */
axios.get(getApiUrl(query))
  .then((res) => {
    const initalData = getInitalData(query, res.data);
    console.log(initalData);

    ReactDOM.render(
      <App initialData={ initalData }/>,
      document.querySelector('[data-reactroot]')
    );
  })
  .catch((err) => {
    console.error('App Error: ', err);
  });

