module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "~/(.*)": "<rootDir>/app/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/node_modules/@testing-library/jest-dom"],
  transformIgnorePatterns: [
    "/node_modules/(?!@remix-run/testing|@remix-run/node|@remix-run/react|@testing-library/)",
  ],
};
