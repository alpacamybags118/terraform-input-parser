module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '/test/src/.*spec.ts$',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  rootDir: '.',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
};
