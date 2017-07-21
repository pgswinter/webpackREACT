var express = require("express");
var webpackDevMiddeware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddeware(compiler,{
	publicPath: "/" // Same as `output.publicPath` iin most cases
}));

app.listen(3535, function(){
	console.log("Listening on port 3535!");
});