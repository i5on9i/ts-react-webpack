var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var buildPath = 'build/';


module.exports = {
  entry: {
    'index': ["./src/index.tsx"],
    // 'vendor' : ['react', 'react-dom'],
    
  },
  output: { 
    path: __dirname + "/dist",
    filename: buildPath + 'app.bundle.[name].js'
    
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias:{
          // utils: path.join(__dirname, '/src/js/common/utils'),
          
        }
    },

  module: {
    rules: [
      { 
        test: /\.css$/,
        use:[
          {
            loader: 'style-loader'
          },
          {
            // loader: 'css-loader',
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              namedExport: true,
              // camelCase: true,
            }
          }
        ],
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, 
        use: "awesome-typescript-loader",
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, use: "source-map-loader" },
      {
        //tell webpack to use babel-loader for all *.jsx files
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      "react-router-dom": "ReactRouterDOM"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    // new ExtractTextPlugin("styles.css"),

    // As the loader generates typing files, it is wise to tell webpack
    // to ignore them. It helps rebuild faster
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
  ]
};