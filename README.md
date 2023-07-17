# 🐳 Triple Whale Cypress UI Tests

## 💪 Purpose

This project is a simple Cypress project that runs tests against the Triple Whale application in order to provide a smoke/sanity tests, and a resulting status page for various parts of the app.

Being that this is hosted and operated outside of the application, it provides a way to monitor the application from an external source.

## 🟡 Prerequesites

1. Ensure you have [node](https://nodejs.org/en/download/), [nvm](https://github.com/nvm-sh/nvm), and optionally [yarn](https://yarnpkg.com/getting-started/install) installed on your machine
1. Ensure you are using Node 18: `nvm use`
1. Install the `package.json` dependencies: `npm i` or `yarn`

## 👨‍💻 Tests

- [x] Alive
- [x] Summary
- [x] Willy
- [ ] Attribution
- [ ] Insights
- [ ] ...& more!

## 🟢 Usage

### 🏁 One-liner for local GUI

```bash
yarn && yarn start
```

### 🏃 Run all tests & generate report

```bash
yarn cy:all
```

### 🏃‍♂️ Run specific test

```bash
yarn cy:alive
yarn cy:summary
yarn cy:willy
## new tests...
```

## Production

This is the command used by Docker to generate and host our files, but you can also run it locally with the following command:

```bash
yarn cy:all && yarn serve
```

## 🐋 Docker

You can build and run the Docker image with the following commands:

```bash
# Build the image
yarn docker:build

# run compose
yarn docker:compose
```

### ☁️ GCP Cloud Run

We have also included a `cloudbuild.yaml` file, which should enable you to host this app on GCP Cloud Run.

You can build and run the Cloud Run image with the following commands:

```bash
# Build and deploy
gcloud run deploy
```
