const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {

                test:/\.scss$/,
            
                loaders:['style-loader','css-loader','sass-loader']
            
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
