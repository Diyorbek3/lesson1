// jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],

  // Coverage sozlamalari:
  collectCoverage: false,       // Default false, --coverage bilan faollashadi
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',            // Terminal chiqishi
    'text-summary',    // Qisqa xulosa
    'html',            // Brauzer uchun
    'lcov',            // CI/CD uchun (Coveralls, Codecov)
    'json-summary',    // Badge uchun
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',       // Entry point'ni istisno qilish
    '!src/config/*.js',    // Config fayllarini istisno
  ],
  // Minimal threshold (pastdan CI fail qiladi):
  coverageThreshold: {
    global: {
      branches:   80,
      functions:  80,
      lines:      80,
      statements: 80,
    },
    // Alohida fayl uchun:
    './src/calculator.js': {
      lines: 100,   // Calculator 100% bo'lishi shart
    },
  },
};

