exports.up = function (knex, Promise) {
  return Promise.all([
    // suplier table 
    knex.schema.createTableIfNotExists('pets', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable().comment('name of pet');
      table.string('color').notNullable().comment('color of pet');
      table.integer('age').notNullable().comment('age of pet');
      table.boolean('isActive').defaultTo(true).comment('Active?');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    }).then(() => {
      console.log('Created Table: pets');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('drop table if exists pets cascade'),


  ]).then((values) => {
    console.log('dropped all tables : ', values);
  }, (reason) => {
    console.log('failed to rollback db : ', reason);
  });

};
