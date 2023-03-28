const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
        reportDir: "cypress/results/json",
        overwrite: false,
        html: true,
        json: true,
        inlineAssets: true,
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    }
  },
  defaultCommandTimeout: 6000,
  e2e: {
    specPattern: 'cypress/integration/Tests/*.js',
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
