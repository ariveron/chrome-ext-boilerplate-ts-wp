const path = require('path');

const config = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

const backgroundConfig = Object.assign({}, config, {
  name: 'background',
  entry: './src/background/background.ts',
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'dist')
  }
});

const contentConfig = Object.assign({}, config, {
  name: 'content',
  entry: './src/content/content.ts',
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, 'dist')
  }
});

const popupConfig = Object.assign({}, config, {
  name: 'popup',
  entry: './src/popup/popup.ts',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist')
  }
});

const optionsConfig = Object.assign({}, config, {
  name: 'options',
  entry: './src/options/options.ts',
  output: {
    filename: 'options.js',
    path: path.resolve(__dirname, 'dist')
  }
});

module.exports = [backgroundConfig, contentConfig, popupConfig, optionsConfig];
