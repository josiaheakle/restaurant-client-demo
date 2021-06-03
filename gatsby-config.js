module.exports = {
  siteMetadata: {
    title: "restaurant-client",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: [
          "menu",
          "menu-item",
          "category"
        ],
        queryLimit: 1000,
      },
    },
  ],
};
