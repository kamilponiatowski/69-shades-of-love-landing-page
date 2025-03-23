module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\js$': 'babel-jest'
    },
    moduleFileExtensions: [
      'js',
      'vue'
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '**/*.spec.js'
    ],
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!src/main.js',
      '!**/node_modules/**'
    ]
  };