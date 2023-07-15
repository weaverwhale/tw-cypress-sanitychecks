# Triple Whale Cypress UI Tests

[![Netlify Status](https://api.netlify.com/api/v1/badges/5704624e-816f-43f3-ae28-ac8b2aeae7c4/deploy-status)](https://app.netlify.com/sites/tw-status/deploys)

https://tw-status.netlify.app/

## Purpose

This project is a simple Cypress project that runs tests against the Triple Whale application in order to provide a smoke/sanity tests, and a resulting status page for various parts of the app.

Being that this is hosted and operated outside of the application, it provides a way to monitor the application from an external source.

## Hooks

This app has a webhook that can be used to trigger a test run.

The app also has a headless CRON function that builds a new report every **5 minutes**

We could also implement a hook that triggers on every deployment, but it's probably better to use a CRON considering our deployment frequency.

## Tests

- [x] Alive
- [x] Summary
- [x] Willy
- [ ] Attribution
- [ ] Insights
- [ ] ...more!

## Usage

### One-liner for local GUI

```bash
yarn && yarn start
```

### Run all tests & generate report

This is the command that is run by Netlify to generate the report.

```bash
yarn cy:all
```

### Run specific test

```bash
yarn cy:alive
yarn cy:summary
yarn cy:willy
## new tests...
```
