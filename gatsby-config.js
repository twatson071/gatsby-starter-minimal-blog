require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
module.exports = {
  plugins: [
    {
      resolve: `@agney/gatsby-theme-wedding`,
      options: {
        contentPath: "occasion", // Tell the theme where your data is.
        basePath: "/event" // Tell the theme which URL to render the theme at.
      }
    }
  ]
};
