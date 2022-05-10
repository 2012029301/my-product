function sum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
}
module.exports = sum;
