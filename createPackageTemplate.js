import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
export default (inputConfig) => {
  const template = fs.readFileSync("./template/package.ejs", "utf-8");
  const code = ejs.render(template, {
    packageName: inputConfig.packageName,
    middleware: inputConfig.middleware,
  });
  return prettier.format(code, { parser: "json" });
};
