const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your main JavaScript file
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply loaders to .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
