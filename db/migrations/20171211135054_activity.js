exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity', function(table) {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('challenge_id')
      .notNullable()
      .references('id')
      .inTable('challenges')
      .onDelete('CASCADE')
      .index();
    table.integer('vote').defaultsTo(0);
    table.boolean('completion').defaultsTo(null);
    table.boolean('active').defaultsTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activity');
};
