/*
  Enzyme adapter to run test with jest.
  Used in the jest.config.js
 */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
