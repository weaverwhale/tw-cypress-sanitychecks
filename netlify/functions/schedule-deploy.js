const fetch = require("node-fetch");
import { schedule } from "@netlify/functions";

// https://app.netlify.com/sites/tw-status/configuration/deploys
const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64b0538251e4203508d154bb";

// https://crontab.guru/every-10-minutes
const handler = schedule("*/10 * * * *", async () => {
  console.log("Triggering build hook:", BUILD_HOOK);
  const res = {};

  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response:", response);
    res = response;
  });

  return {
    statusCode: 200,
    ...res,
  };
});

export { handler };
