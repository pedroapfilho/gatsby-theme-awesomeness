module.exports = {
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [{userAgent: '*', allow: '/'}]
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline'
	]
};
