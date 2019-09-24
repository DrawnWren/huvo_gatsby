module.exports = {
  siteMetadata: {
    title: `Harvard Undergraduate Veterans Organization`,
    description: `Home of the HUVO`,
    author: `Curt and @drawnwren`,
    menuLinks: [
      {
        name: "About the Team",
        link: "/aboutus",
      },
      {
        name: "Events",
        link: "/events",
      },
      {
        name: "Reach Out",
        link: "/reachout",
      },
      {
        name: "FAQ",
        link: "/faqs",
      },
    ],
    mission:
      "Our mission is to ullamcorper, vel facilisis diam rhoncus. Nunc porttitor at est sodales ultricies. Nullam ut odio nec libero vestibulum luctus sit amet in velit. Donec commodo semper urna. Aenean mollis est et fringilla sodales. Vestibulumsed pharetra tortor, a molestie urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu leo efficitur, feugiat metus in, fringilla mauris. Sed lectus metus, malesuada sit amet dui id, accumsan ultrices justo. Sed dapibus aliquet tempor. Curabitur libero leo, eleifend a massa et, finibus lobortis nisl. Aliquam sed volutpat nibh. Phasellus tempor ut ex a auctor.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/faqs`,
        name: "faqs",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/members`,
        name: "members",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harvard Undergraduate Veterans Organization`,
        short_name: `HUVO`,
        start_url: `/`,
        background_color: `#A51C30`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/harvard-college.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
