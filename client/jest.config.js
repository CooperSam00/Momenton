module.exports = {
    testMatch: [
        "<rootDir>/src/**/**test.js?(x)",
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    reporters: [
        "default",
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/?(*).js",
        "<rootDir>/server/controllers/employees.test.js"
    ],
    coverageDirectory: "./coverage",
    coverageReporters: [
        "text",
        "text-summary"
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    setupFiles: [
        "./test-setup"
    ]
}