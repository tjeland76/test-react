import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    //debug: true,
    devtool: 'inline-source-map',
    //noInfo: false,
    entry: [
        //'eventsource-polyfill', // necessary for hot reloading with IE
        //'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index.js')
    ],
    target: 'web',
    output: {
		path: __dirname,
		filename: 'bundle.js',
		//path: path.resolve(__dirname, "src"),
		publicPath: "/"
		//filename: "bundle.js"
    },
    //devServer: {
	//	historyApiFallback: true,
	//	contentBase: './'
    //contentBase: path.resolve(__dirname, 'src')
    //},
    plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/index.html'),
          favicon: 'src/favicon.ico',
          inject: true,
          // Note that you can add custom options here if you need to handle other custom logic in index.html
          // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
          trackJSToken: ''
        }),
        new ExtractTextPlugin(
			{
				filename: 'public/styles.css', 
				allChunks: true
			}),
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    node: {
        fs: 'empty',
        dns: 'empty',
        tls: 'empty',
        net: 'empty',
        child_process: 'empty'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, include: [path.join(__dirname, 'src'),path.join(__dirname, 'node_modules/nodemailer')], loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
             {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    }
};