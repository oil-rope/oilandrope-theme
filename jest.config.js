/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: [...defaults.moduleDirectories, 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss', 'css'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Icons/(.*)$': '<rootDir>/src/icons/$1',
    // eslint-disable-next-line prettier/prettier
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  verbose: true,
};
