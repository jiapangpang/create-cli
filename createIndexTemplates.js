import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
export default (inputConfig) => {
  const template = fs.readFileSync("./template/index.ejs", "utf-8");
  console.log(template);
  const code = ejs.render(template, {
    middleware: inputConfig.middleware,
    port: inputConfig.port,
  });
  return prettier.format(code, { parser: "babel" });
};
