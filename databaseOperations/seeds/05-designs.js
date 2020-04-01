exports.seed = function(knex) {
  return knex("designs").insert([
    {
      design_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      thumbnail_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    },
    {
      design_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      thumbnail_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    },
    {
      design_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      thumbnail_url: "https://www.redditstatic.com/avatars/avatar_default_18_46A508.png",
      design_name: "Ant for shirt",
      storeID: 1,
      userID: 1
    }
  ]);
};
