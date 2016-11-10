const path = require('path')

module.exports = {
	context: __dirname,
	entry: './js/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loaders: ["react-hot-loader/webpack", "eslint-loader" ],
				exclude: /node_modules/
			}
		],

		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}