exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', function(table) {
    table.increments();
    table.string('title');
    table.boolean('unlisted');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
