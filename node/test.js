const fs = require("fs");
// 先写入文件，再读取文件
fs.readFile("./data/list.txt", "utf8", function (err, data) {
  if (err) {
    console.log("读取文件失败", err);
  } else {
    console.log("读取文件成功", data);
  }
});
fs.writeFile("./data/list.txt", "hello111", "utf-8", function (err) {
  if (err) {
    console.log("文件写入失败");
  } else {
    console.log("文件写入成功");
  }
});
