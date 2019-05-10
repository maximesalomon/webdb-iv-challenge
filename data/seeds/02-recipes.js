
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'rowValue1', dish_id: '1' },
        { name: 'rowValue2', dish_id: '3' },
        { name: 'rowValue3', dish_id: '2' },
      ]);
    });
};
