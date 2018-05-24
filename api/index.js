import express from 'express';
import {
  MongoClient,
  ObjectID,
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
      contestName: 1,
      categoryName: 1,
      description: 1,
    })
    .each((err, contest) => {
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });
});

/**
 * get single contest
 */
router.get('/contests/:contestId', (req, res) => {
  const contestId = ObjectID(req.params.contestId);
  // console.log(contestId);
  mdb.collection('contests')
    .findOne({ _id: contestId })
    .then((contest) => {
      res.send({ contest });
    });
});

/**
 * Get names from database
 */
router.get('/names/:nameIds', (req, res) => {
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  // get names from database
  mdb.collection('names')
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      if (!name) {
        res.send({ names });
        return;
      }
      names[name._id] = name;
    });
});

export default router;
