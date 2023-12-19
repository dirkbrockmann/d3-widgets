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
          test: /\.css$/i,
			use: ['style-loader', {
				loader: 'css-loader',
				options:{
					importLoaders:1,
					modules:true,
				}
			}]
        },
      ],
    },
};
