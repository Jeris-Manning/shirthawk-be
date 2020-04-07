exports.seed = function(knex) {
  return knex("stores").insert([
    { active: true, store_name: "Shirt Hawk", userID: 1 }
  ]);
};
