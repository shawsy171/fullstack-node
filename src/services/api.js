import axios from 'axios';

/**
 * Get single contest data
 * @param {*} contestId
 * @return { object }
 */
export const fetchContest = (contestId) => {
  return axios.get(`/api/contests/${contestId}`)
    .then((res) => res.data.contest);
};