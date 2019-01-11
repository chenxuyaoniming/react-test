const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        proxy:{
            '/api': {
                target: 'http://m.kugou.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            },
            '/search':{
                target: 'http://mobilecdn.kugou.com/api/v3/search/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/search': ''
                }
            }
        }
    }
});
