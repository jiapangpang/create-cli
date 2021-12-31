#!/usr/bin/env node

import fs from "fs";
import { execa } from "execa";
import chalk from "chalk";
import createIndexTemplate from "./createIndexTemplates.js";
import createPackageTemplate from "./createPackageTemplate.js";
import question from "./question/index.js";
import createConfig from "./createConfig.js";
//input
const r = await question();
const config = createConfig(r);
console.log(config);
console.log(chalk.blue(`创建文件夹`));
fs.mkdirSync(getRootPath());
console.log(chalk.blue(`创建入口文件->index.js`));
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));
console.log(chalk.blue(`创建package.json`));
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
);

console.log(chalk.blue(`安装依赖`));
execa("pnpm i", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});
function getRootPath() {
  return "./hei";
}
