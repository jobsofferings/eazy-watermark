module.exports = {
  modulePaths:["./"],
  testMatch: [ "**/__tests__/**/*-test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  testPathIgnorePatterns: ["./lib/", "./node_modules/"],
  coveragePathIgnorePatterns: ["./lib/", "./node_modules/"],
  testEnvironment: "jsdom",
};
