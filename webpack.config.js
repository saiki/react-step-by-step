var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		javascrpt: './src/app.js',
		html: './src/index.html',
		css: './src/app.css'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
		{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loaders: ['babel'],
		},
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]"
    },
		{
			test: /\.css$/,
			loader: "file?name=[name].[ext]",
		},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
	},
};
