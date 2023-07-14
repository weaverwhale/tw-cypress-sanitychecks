// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// https://github.com/adamgruber/mochawesome-report-generator/issues/130
import addContext from "mochawesome/addContext";

const titleToFileName = (title) => title.replace(/[:\/]/g, "");

Cypress.on("test:after:run", (test, runnable) => {
  // screenshot on failure
  if (test.state === "failed") {
    const filename = `${titleToFileName(
      runnable.parent.title
    )} -- ${titleToFileName(test.title)} (failed).png`;
    addContext(
      { test },
      `../cypress/screenshots/${Cypress.spec.name}/${filename}`
    );
  }

  // always add video
  addContext({ test }, `../cypress/videos/${Cypress.spec.name}.mp4`);
});
