import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import path from "path";
import { fileURLToPath } from "url";
export default (inputConfig) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs"),
    "utf-8"
  );
  console.log(template);
  const code = ejs.render(template, {
    middleware: inputConfig.middleware,
    port: inputConfig.port,
  });
  return prettier.format(code, { parser: "babel" });
};
