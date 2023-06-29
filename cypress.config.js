const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://app.triplewhale.com",
    setupNodeEvents(on, config) {
      on("before:browser:launch", () => {
        if (config.env.demo) {
          // @TODO
        }
      });
    },
  },
});
