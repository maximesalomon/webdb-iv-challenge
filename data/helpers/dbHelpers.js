const knex = require("knex");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dish");
}

function getDish(id) {
  return db("dish")
    .where("id", "=", id)
    .first();
}

function addDish(dish) {
  return db("dish")
    .insert(dish)
    .then(id => {
      return getDish(id[0]);
    });
}

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where("id", "=", id)
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(id => {
      return getRecipe(id[0]);
    });
}