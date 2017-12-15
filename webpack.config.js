const path = require('path');

module.exports = [
    {
        entry: path.join(__dirname, 'src/components/App.jsx'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        externals: [function (context, request, callback) {
                if (request === 'electron') {
                    return callback(null, 'require(\'' + request + '\')');
                }
                return callback();
            }
        ]
    }
]
