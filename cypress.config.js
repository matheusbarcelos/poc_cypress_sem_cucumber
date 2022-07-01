const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1500,
  defaultCommandTimeout: 100000,
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true,
  reporterOptions: {
    overwrite: false,
  },
  includeShadowDom: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: 'https://uat.dotznext.com/ganhe-online/uissr/default',
  },
});
