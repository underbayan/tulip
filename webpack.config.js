const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const FlowWebpackPlugin = require('flow-webpack-plugin')
module.exports = env => {
    const name = 'tx-tulip' + (env.v ? env.v : '') + '.js'
    return {
        entry: './src/index.js',
        mode: env.dev ? 'development' : 'production',
        watch: !!env.dev,
        devtool: 'source-map',
        output: {
            filename: name,
            publicPath: env.dev ? '/dev/' : '/dist/',
            path: path.resolve(__dirname, env.dev ? 'dev' : 'dist'),
            globalObject: 'this',
            libraryTarget: 'umd',
            // libraryExport: 'default',
            library: 'TX_TULIP'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|mjs)$/,
                    loader: 'babel-loader',
                    include: [path.resolve(__dirname, './src')],
                    options: {
                        extends: path.resolve(__dirname, '.babelrc')
                    }
                }
            ]
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerPort: 5000 + ~~(Math.random() * 300)
            }),
            new FlowWebpackPlugin({
                failOnError: false,
                failOnErrorWatch: false,
                reportingSeverity: 'warning',
                printFlowOutput: false,
                flowPath: require.main.require('flow-bin'),
                flowArgs: ['--color=always'],
                verbose: false,
                callback: result => {}
            })
        ]
    }
}
