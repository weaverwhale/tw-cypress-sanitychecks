const fs = require("fs");

const dir = "./mochawesome-report/*";
if (fs.existsSync(dir)) {
  fs.rm(dir, { recursive: true });
}
