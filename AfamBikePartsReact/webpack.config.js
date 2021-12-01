var path = require('path');
var webpack = require('webpack');
var terser = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = merge([
    {
        entry: {
            afamapp: './client/afamapp.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'wwwroot/js'),
            filename: '[name].js',
            publicPath: '/js/'
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'appvendor',
                        chunks: 'all'
                    }
                }
            },
        }
    },
]);

const production = merge([
    {
        module: {
            rules: [               
                {
                    test: /\.tsx?$/,
                    use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                useBuiltIns: 'entry',
                                                targets: '> 1.0%',
                                                corejs: 3,
                                                debug: false,
                                            }
                                        ]
                                    ],
                                    sourceType: 'unambiguous',
                                },
                            },
                            {
                                loader: 'ts-loader'
                            }
                        ],
                    exclude: /node_modules/
                }
            ]
        },
        optimization: {
            minimizer: [new terser({
                parallel: true,
                terserOptions: {
                    warnings: false,
                },
            })],
        },
        performance: {
            hints: false
        }
    }
]);

const development = merge([
    {
        devtool: 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
    }
]);

module.exports = function (env, argv) {
    if (argv.mode === 'production') {
        return merge(common, production)
    } else {
        return merge(common, development)
    }
};