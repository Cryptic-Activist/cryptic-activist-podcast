const withImage = require('next-images');
const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass');

module.exports = withImage(withCSS(withSASS({
  cssModules: true,
  webpack: (config) => {
    return config;
  }
})));
