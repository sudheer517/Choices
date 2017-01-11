var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('vendor.css');

module.exports = {
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        loaders: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
            { test: /\.css(\?|$)/, loader: extractCSS.extract(['css']) },
            { test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery' }
        ]
    },
    entry: {
        vendor: [
            'jquery',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/router',
            '@angular/platform-server',
            'angular2-universal',
            'angular2-universal-polyfills',
            'imports-loader',
            'tether',
            'tether/dist/css/tether.css',
            'bootstrap',
            'bootstrap/dist/css/bootstrap.css',
            'es6-shim',
            'es6-promise',
            'jquery-slimscroll',
            'zone.js',
            'lodash',
            'string-replace-loader',
            'fullcalendar',
            'fullcalendar/dist/fullcalendar.css',
            'amcharts3',
            'ammap3',
            'ammap3/ammap/ammap.css',
            'normalize.css/normalize.css',
            'chart.js',
            'easy-pie-chart',
            'google-maps',
            'leaflet',
            'leaflet/dist/leaflet.css',
            'leaflet-map',
            'ckeditor'
        ]
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'wwwroot', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};
