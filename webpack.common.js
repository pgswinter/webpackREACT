const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const publicPath = "./dist/";

module.exports={
	entry:{
		'main':'./src/components/project-two/index.js',
		'another':'./src/components/project-two/another.js',
		'vendor':'./src/components/project-two/vendor.js'
	},
	output:{
		path: path.join(__dirname, './dist'),
		filename: '[name].bundle.js',
		publicPath: publicPath,
		sourceMapFilename: '[name].map'
	},
	resolve:{
		extensions: ['.js','.json'],
		modules:[path.join(__dirname, 'src'),'node_modules']
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use: ['babel-loader','source-map-loader'],
				enforce: "pre"
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			}
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({ // Prevent Duplication + keep latest verison when CHUNK HASH
	    	name: ["vendor", "manifest"], // vendor libs + extracted manifest
  			minChunks: Infinity,
	    }),
	    new webpack.HashedModuleIdsPlugin(), // Avoid cache by hashing each modules and inject (assign to) each ID for them - module in module.exports
	    new WebpackChunkHash(), // Hashing with MD5 standard. It was copied by webpack-md5-hash
	    new ChunkManifestPlugin({ // Each turn will lead new hash and dismiss long-term caching
	      filename: "chunk-manifest.json",
	      manifestVariable: "webpackManifest",
	      inlineManifest: true
	    }),
		new HtmlWebpackPlugin({
			template: 'src/components/project-two/index.html',
			chunksSortMode: 'dependency'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "lodash"
		})
	]
}