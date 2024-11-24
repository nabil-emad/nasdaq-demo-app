module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: { '^src/(.*)$': '<rootDir>/src/$1' },
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' }
};
