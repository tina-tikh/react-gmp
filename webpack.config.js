const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    mode: IS_DEV ? 'development' : 'production',
    devtool: IS_DEV ? 'inline-source-map' : false,
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `[name].js`
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    optimization: {
        minimize: !IS_DEV,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 10,
                }
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/, nodeModulesPath],
                use: {
                    loader: 'awesome-typescript-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: IS_DEV,
                        },
                    }
                ],
            },
            {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
                use: 'url-loader?limit=10000',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
