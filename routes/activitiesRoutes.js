var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('activity')
    .select()
    .then(activities => res.json(activities))
});

router.get('/:id', (req, res, next) => {
  knex('activity')
    .select()
    .where('id', req.params.id)
    .then(activity => res.json(activity))
});
module.exports = router;
