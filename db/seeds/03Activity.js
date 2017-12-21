
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {user_id: 19, challenge_id:1, vote: 1, completion: null, active: true},
        {user_id: 1, challenge_id:1, vote: -1, completion: false, active: true },
        {user_id: 2, challenge_id:1, vote: -1, completion: false, active: true },
        {user_id: 3, challenge_id:1, vote: 0, completion: true, active: false},
        {user_id: 4, challenge_id:1, vote: 1, completion: true, active: null},
        {user_id: 5, challenge_id:1, vote: 1, completion: null, active: null},
        {user_id: 6, challenge_id:1, vote: -1, completion: false, active: true },
        {user_id: 7, challenge_id:1, vote: 1, completion: null, active: null},
        {user_id: 8, challenge_id:1, vote: -1, completion: null, active: false},

        {user_id: 19, challenge_id:2, vote: 1, completion: null, active: true},
        {user_id: 2, challenge_id:2, vote: -1, completion: false, active: true },
        {user_id: 6, challenge_id:2, vote: -1, completion: false, active: false},
        {user_id: 7, challenge_id:2, vote: -1, completion: true, active: null},
        {user_id: 8, challenge_id:2, vote: 0, completion: false, active: true },
        {user_id: 9, challenge_id:2, vote: -1, completion: null, active: null},
        {user_id: 10, challenge_id:2, vote: -1, completion: true, active: false},

        {user_id: 19, challenge_id:3, vote: 1, completion: null, active: true},
        {user_id: 2, challenge_id:3, vote: -1, completion: false, active: false },
        {user_id: 15, challenge_id:3, vote: 0, completion: null, active: null},
        {user_id: 7, challenge_id:3, vote: -1, completion: false, active: true },
        {user_id: 17, challenge_id:3, vote: 1, completion: null, active: null},
        {user_id: 19, challenge_id:3, vote: -1, completion: false, active: true },
        {user_id: 12, challenge_id:3, vote: 1, completion: true, active: false},
        {user_id: 1, challenge_id:3, vote: 1, completion: false, active: true },
        {user_id: 10, challenge_id:3, vote: 1, completion: true, active: null},


        {user_id: 2, challenge_id:4, vote: -1, completion: false, active: false},
        {user_id: 15, challenge_id:4, vote: 0, completion: null, active: false},
        {user_id: 6, challenge_id:4, vote: -1, completion: null, active: null},
        {user_id: 3, challenge_id:4, vote: 1, completion: false, active: true },
        {user_id: 19, challenge_id:4, vote: 1, completion: true, active: null},
        {user_id: 7, challenge_id:4, vote: 1, completion: null, active: null},
        {user_id: 1, challenge_id:4, vote: 1, completion: false, active: true},
        {user_id: 10, challenge_id:4, vote: 1, completion: null, active: null},

        {user_id: 19, challenge_id:5, vote: 1, completion: null, active: true},
        {user_id: 2, challenge_id:5, vote: -1, completion: true, active: false},
        {user_id: 8, challenge_id:5, vote: -1, completion: false, active: true },
        {user_id: 14, challenge_id:5, vote: 1, completion: true, active: null},
        {user_id: 17, challenge_id:5, vote: 1, completion: null, active: null},
        {user_id: 7, challenge_id:5, vote: 1, completion: false, active: true },
        {user_id: 4, challenge_id:5, vote: 1, completion: false, active: true },
        {user_id: 13, challenge_id:5, vote: 1, completion: true, active: false},
        {user_id: 18, challenge_id:5, vote: 0, completion: false, active: true },
        {user_id: 12, challenge_id:5, vote: -1, completion: false, active: false},
        {user_id: 11, challenge_id:5, vote: 1, completion: false, active: true },
        {user_id: 19, challenge_id:5, vote: 1, completion: true, active: null},
        {user_id: 6, challenge_id:5, vote: 1, completion: false, active: true },
        {user_id: 1, challenge_id:5, vote: 1, completion: null, active: null},
        {user_id: 10, challenge_id:5, vote: 1, completion: null, active: null}
      ]);
    });
};
