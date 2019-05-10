exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes_to_ingredients', table => {
        table.increments();
        table.integer('recipe_id').references('id').on('recipes');
        table.integer('ingredient_id').references('id').on('ingredients');
        table.float('quantity').notNullable();
        table.string('unit').notNullable();
    })
  };
  
  exports.down = function (knex, Promise) {
      return knex.schema.dropTableIfExists('recipes_to_ingredients');
  };