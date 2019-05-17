const path = require('path')
const rules = require('./config/rules.config.js')
const resolve = require('./config/resolve.config.js')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development',//development production
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'draggable.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: rules
    },
    resolve: resolve,
    devtool: 'source-map',
    stats: 'errors-only',
    externals: [nodeExternals()],
}
