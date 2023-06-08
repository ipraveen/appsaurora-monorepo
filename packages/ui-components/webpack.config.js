var path = require('path');

module.exports = {
    // Change to your "entry-point".
    mode: 'development', // development | production
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: 'react',
    },
};
