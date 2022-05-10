function sum(arr) {
  let allNum = 0;
  arr.forEach((item) => (allNum += item));
  return allNum;
}
function filterWords(str) {
  let newStr = "";
  newStr = str.replace(/<|>/g, (item) => {
    switch (item) {
      case "<":
        return "&lt";
      case ">":
        return "&gt";
      case "&":
        return "&gt";
      case '"':
        return "&quot";
    }
  });
  return newStr;
}
function reCover(str) {
  let newStr = "";
  newStr = str.replace(/&lt|&gt|&amp|&quot/g, (item) => {
    switch (item) {
      case "&lt":
        return "<";
      case "&gt":
        return ">";
      case "&amp":
        return "&";
      case "&quot":
        return '"';
    }
  });
  return newStr;
}
module.exports = {
  sum,
  filterWords,
  reCover,
};
