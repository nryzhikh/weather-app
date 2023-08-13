const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
        app: './src/app.js',
    },
    output: {
         filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
      }),
    ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
     };