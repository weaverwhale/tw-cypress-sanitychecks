const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  retries: 2,
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://app.triplewhale.com",
    setupNodeEvents(on, config) {
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
