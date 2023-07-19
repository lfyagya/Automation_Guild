const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

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
    specPattern: 'cypress/integration/BDD/*.feature',
    // specPattern: 'cAutomation_Guild/cypress/integration/BDD**/*.feature',
    // specPattern: 'cypress/integration/Tests/*.{js,jsx,ts,tsx,feature}',
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    setupNodeEvents,
  },
});
