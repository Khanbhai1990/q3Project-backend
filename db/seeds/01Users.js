
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
                {
                   "age": 19,
                   "name": "Loretta Irwin",
                   "gender": "female",
                   "email": "lorettairwin@vertide.com",
                   "address": "North Carolina"
                },
                {
                   "age": 22,
                   "name": "Medina Caldwell",
                   "gender": "male",
                   "email": "medinacaldwell@vertide.com",
                   "address": "New York"
                },
                {
                   "age": 45,
                   "name": "Valdez Suarez",
                   "gender": "male",
                   "email": "valdezsuarez@vertide.com",
                   "address": "New York"
                },
                {
                   "age": 55,
                   "name": "Burns Dickerson",
                   "gender": "male",
                   "email": "burnsdickerson@vertide.com",
                   "address": "California"
                },
                {
                   "age": 28,
                   "name": "Dolores Buck",
                   "gender": "female",
                   "email": "doloresbuck@vertide.com",
                   "address": "Washington"
                },
                {
                   "age": 21,
                   "name": "Copeland Burks",
                   "gender": "male",
                   "email": "copelandburks@vertide.com",
                   "address": "New York"
                },
                {
                   "age": 15,
                   "name": "Sandy Clarke",
                   "gender": "female",
                   "email": "sandyclarke@vertide.com",
                   "address": "Arizona"
                },
                {
                   "age": 18,
                   "name": "Dixon Moon",
                   "gender": "male",
                   "email": "dixonmoon@vertide.com",
                   "address": "Colorado"
                },
                {
                   "age": 23,
                   "name": "Boyle Wilson",
                   "gender": "male",
                   "email": "boylewilson@vertide.com",
                   "address": "California"
                },
                {
                   "age": 35,
                   "name": "Gould Ayala",
                   "gender": "male",
                   "email": "gouldayala@vertide.com",
                   "address": "Florida"
                },
                {
                   "age": 20,
                   "name": "Natalia Adkins",
                   "gender": "female",
                   "email": "nataliaadkins@vertide.com",
                   "address": "Texas"
                },
                {
                   "age": 19,
                   "name": "Eva Prince",
                   "gender": "female",
                   "email": "evaprince@vertide.com",
                   "address": "Texas"
                },
                {
                   "age": 24,
                   "name": "Sharon Mullen",
                   "gender": "female",
                   "email": "sharonmullen@vertide.com",
                   "address": "Florida"
                },
                {
                   "age": 21,
                   "name": "Jannie Sosa",
                   "gender": "female",
                   "email": "janniesosa@vertide.com",
                   "address": "Arizona"
                },
                {
                   "age": 21,
                   "name": "Bonner Brady",
                   "gender": "male",
                   "email": "bonnerbrady@vertide.com",
                   "address": "Illinois"
                },
                {
                   "age": 34,
                   "name": "Hurst Church",
                   "gender": "male",
                   "email": "hurstchurch@vertide.com",
                   "address": "Arizona"
                },
                {
                   "age": 28,
                   "name": "Castillo Holland",
                   "gender": "male",
                   "email": "castilloholland@vertide.com",
                   "address": "California"
                },
                {
                   "age": 16,
                   "name": "Essie Terrell",
                   "gender": "female",
                   "email": "essieterrell@vertide.com",
                   "address": "Florida"
                },
                {
                   "age": 39,
                   "name": "Emerson Zamora",
                   "gender": "male",
                   "email": "emersonzamora@vertide.com",
                   "address": "New York"
                }
      ]);
    });
};
