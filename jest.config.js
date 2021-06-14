module.exports = {
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node', 'tsx', 'jsx'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
  };