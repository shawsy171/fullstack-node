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

/**
 * Get contest list data
 * @return { object }
 */
export const fetchContestList = () => {
  return axios.get(`/api/contests`)
    .then((res) => res.data.contests);
};

/**
 * Get names associated with contest
 * @param { array } nameIds
 * @return { object }
 */
export const fetchNames = (nameIds) => {
  return axios.get(`/api/names/${nameIds.join(',')}`)
    .then((res) => res.data.names);
};
