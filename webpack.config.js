var webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './build/js/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Backbone: 'backbone'
        }),
        new webpack.optimize.UglifyJsPlugin({
            nc: true
        })
    ],
    devtool: '#sourcemap'
};
