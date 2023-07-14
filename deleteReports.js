const fs = require("fs");

const dir = "./mochawesome-report";
if (fs.existsSync(dir)) {
  fs.readdirSync(dir).forEach((f) => fs.rmSync(`${dir}/${f}`));
}
