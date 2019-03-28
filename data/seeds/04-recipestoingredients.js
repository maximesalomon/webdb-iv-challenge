
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_to_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_to_ingredients').insert([
        { recipe_id: 3, ingredient_id: 1, quantity: 20, unit: 'gram' },
        { recipe_id: 2, ingredient_id: 3, quantity: 10, unit: 'gram' },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, unit: 'liter' },
      ]);
    });
};