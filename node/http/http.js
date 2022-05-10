const http = require("http");
const fs = require("fs");
const serve = http.createServer();
// 为服务器实列绑定request，监听客户端请求
serve.on("request", (req, res) => {
  let url = req.url;
  //   res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (url == "/") {
    fs.readFile("../web/test.html", (err, data) => {
      if (err) {
        console.log("读取home页失败");
      } else {
        console.log(url);

        res.end(data);
      }
    });
  } else {
    res.end("404");
  }
});
// 启动服务器
serve.listen(3000, function () {
  console.log("run 3000");
});
