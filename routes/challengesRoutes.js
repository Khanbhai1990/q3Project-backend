var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', (req, res, next) => {

  knex('challenges')
    .select()
    .then(challenges => res.json(challenges))
});

router.get('/:id', (req, res, next) => {
  knex('challenges')
    .select()
    .where('id', req.params.id)
    .then(challenge => res.json(challenge))
});

router.post('/add', function(req, res) {
  console.log("body includes", req.body)
  if (req.body.title){
    knex('challenges').returning('*').insert(req.body).then((challenge) => res.json(challenge));
  } else {
    res.status(403).send("not receiving title")
  }
});

router.patch('/:id/edit_unlisted', function(req, res) {
  knex('challenges').returning('*').update({unlisted: knex.raw('NOT unlisted')}).where('id', req.params.id).then(challenge => res.json(challenge));
});

router.delete('/:id/delete_challenge', function (req, res){
  knex('challenges').del().where('id', req.params.id).then(()=>{
    knex('challenges').select().then(challenges => res.json(challenges) )
  });
});



module.exports = router;
