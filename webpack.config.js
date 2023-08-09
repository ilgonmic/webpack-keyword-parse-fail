let config = {
  mode: 'production',
  entry: require('path').resolve(__dirname, "app.js"),
  output: {
      filename: "bundle.js"
  }
};

module.exports = config
