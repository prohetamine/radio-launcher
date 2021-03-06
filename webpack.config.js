const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const mode = process.env.MODE === 'dev' ? 'development' : 'production'

module.exports = {
  mode,
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|gif|jpeg|jpg)/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, 'public/favicon.svg'),
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  devServer: mode
              ? {
                 static: {
                   directory: path.join(__dirname, 'public'),
                 },
                 compress: true,
                 port: 3000
              }
              : null
}
