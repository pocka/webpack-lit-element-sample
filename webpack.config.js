const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')

const pkg = require('./package.json')

module.exports = {
  entry: { components: './src/components.js', main: './src/main.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // babel-loader docs says "do this" :)
        test: /\.m?js$/,
        include: [
          path.resolve(__dirname, 'src'),
          // We have to transpile Polymer related modules
          // because they are published as ES2017.
          /node_modules\/(@polymer|lit-html)\//
        ],
        use: {
          loader: 'babel-loader',
          // babel-loader sometimes ignore babel config in package.json :(
          options: pkg.babel
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [new CopyPlugin(['src/index.html'])]
}
