const test = require("./test.js");
const moment = require("moment");
// 获取当前时间戳毫秒
let time1 = moment("2020-01-02").format("x").valueOf() / 1000;
let time2 = moment(time1).format("YYYY-MM-DD");
let time3 = moment().format("YYYY-MM-DD HH:MM:SS");
console.log(time1, time2, time3);
console.log(test([1, 3, 4]));
