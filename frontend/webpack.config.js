const path = require("path");

var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: '#source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
  entry: './src/index.js', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
  output: {
      path: path.join(__dirname, '/dist', '/bundle'),
      filename: "main.js",
  },

  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                    presets: ['@babel/env', '@babel/react']
                }

          },
          {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
          },
          { test: /\.html$/i, loader: 'html-loader' },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }

      ]
  },
  plugins: [
    new BundleTracker(
            {   path: '/Users/robertoalvarez/Desktop/virtualEnv/news_refactor/app/backend',
                filename: './webpack-stats.json'}
        ),

  ],
}



