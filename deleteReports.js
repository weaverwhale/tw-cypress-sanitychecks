const fs = require("fs");

const dir = "./cypress/reports";
if (fs.existsSync(dir)) {
  fs.rmdirSync(dir, { recursive: true });
}
