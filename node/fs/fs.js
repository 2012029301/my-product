const fs = require("fs");
fs.readFile("../data/list2.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("读取失败");
  } else {
    console.log(data.split(""));
    ata.split("").forEach((item) => {});
  }
});
