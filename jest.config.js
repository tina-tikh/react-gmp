module.exports = {
  roots: ['<rootDir>/src'],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
};
