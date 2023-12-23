/* webpack.config.js */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widgets.js',
	library: 'widgets' 
  },
  module: {
	  rules: [
	     {
	       test: /\.css$/,
	       use: [
	         "style-loader",
	         {
	           loader: "css-loader",
	           options: {
	             importLoaders: 1,
				   modules: {
					   localIdentName: '[hash:base64:5]__[local]',
				   },

	           },
	         },
	       ],
	       include: /\.module\.css$/,
	     },
	     {
	       test: /\.css$/,
	       use: ["style-loader", "css-loader"],
	       exclude: /\.module\.css$/,
	     },
	   ]
    },
};
