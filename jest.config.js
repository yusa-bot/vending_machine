export default {
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {tsconfig: `./tsconfig.json`}],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testTimeout: 60000,
  testMatch: ["<rootDir>/__tests__/**/*.ts"],
  watchman: false,
};
