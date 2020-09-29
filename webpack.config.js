const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV ==='development'
console.log('Is DEV:', isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill','./index.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js','.jsx', '.json', '.png'],
        alias: {
            '@modals': path.resolve(__dirname, 'src/modals'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        // new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
            contentBase: path.join(__dirname, "public/"),
            port: 3005,
            publicPath: "http://localhost:3005/",
            hotOnly: true
        },
    module: {
        rules: [
            {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options:{
                        modules: true
                    }
                }
            ]
        },
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'less-loader'],
            }),
          },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
        },
        {
            test: /\.xml$/,
            use: ['xml-loader']
        },
        {
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        }
    ]
    }
}