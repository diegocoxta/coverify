module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts|tsx)?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
