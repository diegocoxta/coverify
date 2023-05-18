import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

module.exports = require('babel-jest').default.createTransformer({
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
});
