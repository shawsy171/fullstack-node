import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from './src/components/App';
import config from './config';

/**
 * Returns the needed url
 * @param { number } contestId
 * @return { string }
 */
const getApiUrl = (contestId) => contestId ?
  `${config.serverUrl}/api/contests/${contestId}` :
  `${config.serverUrl}/api/contests`;

/**
 * Get a list of contests or a single contest
 * @param { number } contestId
 * @param { object } apiData
 * @return { object }
 */
const getInitalId = (contestId, apiData) => {
  // console.log(apiData);
  return contestId ?
    {
      currentContestId: apiData.contest._id,
      contests: {
        [apiData.contest._id]: apiData.contest,
      },
    } :
    { contests: apiData.contests };
};

/**
 * Create the react app to be rendered
 * @param { number } contestId
 * @return { promise } react App rendered to a string
 */
const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then((res) => {
      const initialData = getInitalId(contestId, res.data);
      return ReactDOMServer.renderToString(
        <App initialData={ initialData }/>
      );
    });


export default serverRender;
