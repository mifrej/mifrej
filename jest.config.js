module.exports = {
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/jest/tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/config/jest/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.ts',
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/config/jest/setupEnzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',
  transform: {
    '.+\\.(css)$': 'jest-transform-css',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
