module.exports = {
  plugins: [
    `gatsby-theme-awesomeness`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ]
}