/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  webpack: {
    plugins: [
      new Dotenv()
    ],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@configs': path.resolve(__dirname, 'src/configs/'),
      '@services': path.resolve(__dirname, 'src/services/')
    }
  }
};
