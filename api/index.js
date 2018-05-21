import express from 'express';
import {
  MongoClient,
} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(null, err);
  mdb = client.db('test');
});

const router = new express.Router();

/**
 * get all contests
 */
router.get('/contests', (req, res) => {
  let contests = {};
  // get contests from database
  mdb.collection('contests')
    .find({})
    // only get these fields
    .project({
      id: 1,
      contestName: 1,
      categoryName: 1,
      description: 1,
    })
    .each((err, contest) => {
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});

/**
 * get single contest
 */
router.get('/contests/:contestId', (req, res) => {
  const contestId = +req.params.contestId;
  mdb.collection('contests')
    .findOne({ id: contestId })
    .then((contest) => {
      res.send({ contest });
    });
});

/**
 * Get names from database
 */
router.get('/names/:nameIds', (req, res) => {
  const nameIds = req.params.nameIds.split(',').map(Number);
  let names = {};
  // get names from database
  mdb.collection('names')
    .find({ id: { $in: nameIds } })
    .each((err, name) => {
      if (!name) {
        res.send({ names });
        return;
      }
      names[name.id] = name;
    });
});

export default router;
