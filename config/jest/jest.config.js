/*
  Jest config:
  Used in the package.js
  Note rootDirPath is specified to ensure test coverage is correct.
 */

const rootDirPath = '<rootDir>/config/jest';
module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: `${rootDirPath}/enzyme.config.js`,
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${rootDirPath}/fileTransformer.js`,
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/src/index.js',
    '/config/',
    '/node_modules/',
    '/vendor/',
    '/coverage/*',
  ],
  coverageDirectory: 'coverage',
};
