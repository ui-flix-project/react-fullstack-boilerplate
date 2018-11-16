module.exports = {
    entry: './index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
}
