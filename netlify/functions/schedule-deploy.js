import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

// https://app.netlify.com/sites/tw-status/configuration/deploys
const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/64b0538251e4203508d154bb";

// https://crontab.guru/every-15-minutes
// export const handler = schedule("*/15 * * * *", async () => {

// https://crontab.guru/once-a-day
export const handler = schedule("0 0 * * *", async () => {
  console.log("Triggering build hook:", BUILD_HOOK);
  let res = {};

  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log(
      "Build hook response:",
      `${response.status} ${response.statusText}`
    );
    res = response;
  });

  return {
    ...res,
    statusCode: 200,
  };
});

export default handler;
