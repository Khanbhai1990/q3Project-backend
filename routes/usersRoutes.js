var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from users').then(function(users) {
    res.send(users.rows);
  });
});

router.get('/:id', (req, res, next) => {
  knex('users')
    .select()
    .where('id', req.params.id)
    .then(user => res.json(user))
});

module.exports = router;
