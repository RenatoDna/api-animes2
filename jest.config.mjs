export default {
  testEnvironment: "node",
  transform: {}, // sem Babel
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js"
  ],
  moduleFileExtensions: ["js", "json", "mjs"],
  testMatch: [
    "**/tests/**/*.test.js",
    "**/tests/**/*.test.mjs"
  ]
};
