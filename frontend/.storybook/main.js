const path = require('path')

module.exports = {
  "stories": [
    "../app/components/**/*.stories.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
	webpackFinal: async (config) => {
		config.resolve.alias = {
      '@App': path.resolve(__dirname, '../app/'),
      '@Public': path.resolve(__dirname, '../public/'),
			'@Gql': path.resolve(__dirname, '../graphql/'),
			'@Components': path.resolve(__dirname, '../app/components/'),
			'@Pages': path.resolve(__dirname, '../app/(pages)/')
		};
		return config
	}
}