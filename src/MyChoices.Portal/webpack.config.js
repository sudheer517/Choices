var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var merge = require('webpack-merge');
var allFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;

var sharedConfig = {
    resolve: { extensions: ['', '.js', '.ts'] },
    output: {
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /AngularSpa/, loader: 'ts', query: { silent: true } },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ["to-string", "css", "sass"] },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url', query: { limit: 25000 } }
        ]
    }
};

var clientBundleConfig = merge(sharedConfig, {
    entry: { 'main-client': './AngularSpa/boot-client.ts' },
    output: { path: path.join(__dirname, './wwwroot/dist') },
    devtool: isDevBuild ? 'inline-source-map' : null,
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ])
});

var serverBundleConfig = merge(sharedConfig, {
    entry: { 'main-server': './AngularSpa/boot-server.ts' },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, './AngularSpa/dist')
    },
    target: 'node',
    devtool: 'inline-source-map',
    externals: [nodeExternals({ whitelist: [allFilenamesExceptJavaScript] })]
});

module.exports = [clientBundleConfig, serverBundleConfig];
