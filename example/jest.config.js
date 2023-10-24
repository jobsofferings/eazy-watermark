module.exports = {
  preset: "babel-jest",
  testMatch: [ "**/__tests__/**/*-test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  modulePaths:["./"],
  moduleNameMapper: {
    "\\.(css|less|png|jpg|jpeg|svg)$": "identity-obj-proxy"
  },
  transform: {
    "node_modules/antd/**/*.[jt]s?(x)$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!antd/.*)"],
};
