/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  coverage: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
  },
  verbose: true,
};
