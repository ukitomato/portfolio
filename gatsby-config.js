module.exports = {
    siteMetadata: {
        title: `UKITOMATO Portfolio`,
        description: `This is a portfolio of UKITOMATO.`,
        author: `@ukitomato`,
        siteUrl: `https://ukitomato.dev/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `src-gen/gatsby-types.d.ts`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ukitomato-portfolio`,
                short_name: `portfolio`,
                start_url: `/`,
                background_color: `#339199`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#339199`,
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ue6ri98smlot`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@src': 'src',
                    '@components': 'src/components',
                    '@layouts': 'src/layouts',
                    '@pages': 'src/pages',
                    '@sass': 'src/sass',
                    '@templates': 'src/templates',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
}
