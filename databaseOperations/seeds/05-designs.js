exports.seed = function(knex) {
  return knex("designs").insert([
    {
      design_url: "http://clipart-library.com/images/rcnr55d9i.png",
      thumbnail_url: "http://clipart-library.com/images/rcnr55d9i.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    },
    {
      design_url: "http://clipart-library.com/images/rcnr55d9i.png",
      thumbnail_url: "http://clipart-library.com/images/rcnr55d9i.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    },
    {
      design_url: "http://clipart-library.com/images/rcnr55d9i.png",
      thumbnail_url: "http://clipart-library.com/images/rcnr55d9i.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    }
  ]);
};
