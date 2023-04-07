const path = require('path');

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  }
}