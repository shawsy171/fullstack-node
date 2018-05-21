import express from 'express';

import data from './../src/testData';

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

const router = new express.Router();

router.get('/contests', (req, res) => {
  res.send({
    contests: contests,
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Vivamus non eleifend erat. 
    Vivamus luctus erat odio, eu volutpat velit suscipit ut. Phasellus 
    risus enim, sagittis nec arcu maximus, suscipit 
    tempor tortor. Nullam sed lectus vitae nisl ultricies mattis eu 
    sit amet mauris. In nec pellentesque est, id gravida odio. Aenean 
    ac dapibus metus. Curabitur sed nunc vitae orci dignissim bibendum. 
    In et ipsum neque. Quisque vehicula sem pulvinar ligula cursus, 
    ac ultrices purus dictum. Aliquam scelerisque felis vitae nisl 
    semper rutrum.`;
  res.send({
    contest,
  });
});

export default router;
