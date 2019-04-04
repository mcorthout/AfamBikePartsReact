var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');

var appConfig = {
    name: "appConfig",
    entry: {
        afamapp: './client/afamapp.tsx',        
        appvendor: [
            "axios",
            "mobx",
            "mobx-react",
            "react",
            "react-dom",
			"react-paginate",
            "node-polyglot"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: '[name].js',
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: isDevBuild ? 'inline-source-map' : false,
    plugins: isDevBuild ?
        [
            new webpack.optimize.CommonsChunkPlugin({ name: "appvendor", filename: "appvendor.js" })
        ] :
        [
            // Plugins that apply in production builds only
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({ name: "appvendor", filename: "appvendor.js" }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ]
};


// Return Array of Configurations
module.exports = [
    appConfig
];
