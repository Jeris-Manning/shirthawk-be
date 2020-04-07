exports.seed = function(knex) {
  return knex("products").insert([
    {
      productName: "Test Product",
      fullSizeURL:
        "https://res.cloudinary.com/ddgiykavr/image/upload/v1585783488/regular_kl0car.jpg",
      thumbnailURL:
        "https://res.cloudinary.com/ddgiykavr/image/upload/v1585783488/regular_kl0car.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare arcu vulputate arcu suscipit venenatis. Donec sit amet ipsum ac urna dignissim euismod a euismod nisi. Nullam pulvinar odio semper.",
      price: 10.3,
      storeID: 1
    }
  ]);
};
