import ejs from 'ejs'
import fs from 'fs';
let people = ['geddy', 'neil', 'alex']
const template = fs.readFileSync('./template.ejs','utf-8')
const code = ejs.render(template,{people})
console.log(code);