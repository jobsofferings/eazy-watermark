module.exports = {
  modulePaths:["./"],
  testMatch: [ "**/__tests__/**/*-test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  testPathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/node_modules/","<rootDir>/src/utils/log.ts"],
};
