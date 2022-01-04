import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import path from "path";
import { fileURLToPath } from "url";
export default (inputConfig) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/package.ejs"),
    "utf-8"
  );
  const code = ejs.render(template, {
    packageName: inputConfig.packageName,
    middleware: inputConfig.middleware,
  });
  return prettier.format(code, { parser: "json" });
};
