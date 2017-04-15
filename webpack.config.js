var path = require('path');
var webpack = require('webpack');

var buildPath = 'build/'
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin(buildPath + 'common.js');


module.exports = {
  entry: {
    'index': ["./src/index.tsx"],
  },
  output: { 
    path: __dirname + "/dist",
    filename: buildPath + 'app.bundle.[name].js'
    
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
      {
        //tell webpack to use babel-loader for all *.jsx files
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  plugins: [commonsPlugin]
};