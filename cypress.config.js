const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://app.triplewhale.com",
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);

      on("before:browser:launch", (browser, launchOptions) => {
        if (config.env.demo) {
          // @TODO
        }

        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }

        if (browser.name === "electron") {
          launchOptions.preferences.incognito = true;
        }

        return launchOptions;
      });
    },
  },
});
