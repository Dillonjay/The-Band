const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const path = require('path');

const paths = {
	app: path.join(__dirname, 'site', 'app'),
	build: path.join(__dirname, 'site', 'build')
}

module.exports = {
	devServer: {
		inline: true,
		port: process.env.PORT,
		historyApiFallback: true
	},
	resolve: {
    extensions: ['.js', '.jsx']
  	},
	entry: paths.app,
	output: {
		path: paths.build,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
        		enforce: "pre",
        		test: /\.js$/,
        		loader: "eslint-loader",
        		exclude: /node_modules/
      		},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css/,
				loaders: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: HtmlWebpackTemplate,
			title: 'Band Page',
        	appMountId: 'app',
        	mobile: true,
        	inject: false
		})
	]
}