const path = require("path");
// 获取文件名
let dirName = path.basename("../data/list.txt", ".txt");
// 获取扩展名
let extName = path.extname("../data/list.txt");
const joinName = path.join("./a/b", "../", "x");
console.log(dirName, extName, joinName);
