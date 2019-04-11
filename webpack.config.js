const path = require("path");

/*
how to find the path:
1. create the const path (above) and console.log the joined dirname of file with the public folder
2. in terminal, run node webpack.config.js
3. will be given the path
4. to use in module.exports, just put the path.join command as the path (see below)
*/

//expose something to another file
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/, //regex shit...basically says to run files that end in .js
        exclude: /node_modules/ //more regex stuff says don't run anything in node_modules
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};
