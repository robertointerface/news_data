const path = require("path");

var BundleTracker = require('webpack-bundle-tracker')

require("@babel/polyfill");

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: '#source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },


  entry: ['babel-polyfill', './src/index.js'], // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
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
          },

      ]
  },
    resolve: {
        alias: {
            'root': path.resolve(__dirname, 'src/'),
            'containers': path.resolve(__dirname, 'src/containers/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'constants': path.resolve(__dirname, 'src/constants/'),
            'actions': path.resolve(__dirname, 'src/actions/'),
            'functions': path.resolve(__dirname, 'src/store/functions/'),
            'ui': path.resolve(__dirname, 'src/components/ui/'),
            'data': path.resolve(__dirname, 'src/data/'),
            'classes': path.resolve(__dirname, 'src/store/classes'),
            'styles': path.resolve(__dirname, 'src/components/stylesheets'),
        }
    },
  plugins: [
    new BundleTracker(
            {   path: '/Users/robertoalvarez/Desktop/virtualEnv/news_refactor/app/backend',
                filename: './webpack-stats.json'}
        ),

  ],

}



