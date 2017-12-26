const path = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV

const CleanWebpackPlugin = require('clean-webpack-plugin')

const clientDirectory = path.join(__dirname, 'client')

let entry = [path.join(clientDirectory, '/src')]

const plugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
		},
	}),
	new CleanWebpackPlugin([path.join(clientDirectory, 'dist/*.*')]),
]

let devTool = 'cheap-module-eval-source-map'

console.log('NODE_ENV =', env)

if (env === 'production') {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				drop_console: true,
			},
		}),
	)

	devTool = ''
}

if (env === 'development') {
	entry = ['react-hot-loader/patch', ...entry]
}

module.exports = {
	context: path.join(clientDirectory, 'src'),
	devtool: devTool,
	entry,
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				exclude: /node_modules/,
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							camelCase: true,
							localIdentName: '[name]_[local]__[hash:base64:5]',
							modules: true,
						},
					},
					'sass-loader',
				],
			},
			{
				include: path.join(clientDirectory, '/src/resources'),
				test: /\.png$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						mimetype: 'image/png',
						name: '[name]-[hash].[ext]',
					},
				},
			},
			{
				include: path.join(clientDirectory, '/src/resources'),
				test: /\.svg$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						mimetype: 'image/svg+xml',
						name: '[name]-[hash].[ext]',
					},
				},
			},
			{
				include: path.join(clientDirectory, '/src/resources/fonts'),
				test: /\.woff$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						mimetype: 'application/font-woff',
						name: '[name]-[hash].[ext]',
					},
				},
			},
			{
				include: path.join(clientDirectory, '/src/resources/fonts'),
				test: /\.woff2$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						mimetype: 'application/font-woff2',
						name: '[name]-[hash].[ext]',
					},
				},
			},
			{
				include: path.join(clientDirectory, '/src/resources/fonts'),
				test: /\.[ot]tf$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						mimetype: 'application/octet-stream',
						name: '[name]-[hash].[ext]',
					},
				},
			},
		],
	},
	output: {
		filename: 'bundle.nocsf.js',
		library: 'APP',
		libraryTarget: 'var',
		path: path.join(clientDirectory, 'dist'),
		publicPath: '/public/',
	},
	plugins,
	resolve: {
		alias: {
			components: path.join(clientDirectory, 'src/components'),
			config: path.join(clientDirectory, 'src/config'),
			lib: path.join(clientDirectory, 'src/lib'),
			pages: path.join(clientDirectory, 'src/pages'),
			resources: path.join(clientDirectory, 'src/resources'),
			styles: path.join(clientDirectory, 'src/styles'),
			utils: path.join(clientDirectory, 'src/utils'),
		},
		extensions: ['.js'],
	},
}
