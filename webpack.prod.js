const path = require('path');
const glob = require('glob');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');


const buildPath = path.resolve(__dirname, 'dist');

//require("html-loader?interpolate!./file.html");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(scss|css|sass)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    // translates CSS into CommonJS
                    loader: 'css-loader',
                    options: {
                        sourceMap: false
                    }
                }, {
                    // Runs compiled CSS through postcss for vendor prefixing
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false,
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader',
                    options: {
                        outputStyle: 'expanded',
                        sourceMap: false,
                        sourceMapContents: false
                    }
                }],
                fallback: 'style-loader'
            }),
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            // Load all images as base64 encoding if they are smaller than 8192 bytes
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(buildPath),
        require('autoprefixer'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // Inject the js bundle at the end of the body of the given template
            inject: true,
            minify: true
        }),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/assets/icon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash]/',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'nunzia-e-mauro',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: true,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new ExtractTextPlugin('styles.[md5:contenthash:hex:20].css', {
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
};