
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenges').del()
    .then(function () {
      // Inserts seed entries
      return knex('challenges').insert([
        {title: "No Added Sugar Challenge", unlisted: false},
        {title: "10 Days Around Chicago Challenge", unlisted: false},
        {title: "Pokemon Binge Watch Challenge", unlisted: false},
        {title: "Yoga Challenge", unlisted: false},
        {title: "Write Sci-Fi Short Story in 10 days", unlisted: false}
      ]);
    });
};
