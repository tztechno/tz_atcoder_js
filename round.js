const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const X = parseFloat(input);
const a = parseInt(X * 10);

if (a % 10 >= 5) {
  console.log(parseInt(X) + 1);
} else if (a % 10 <= 4) {
  console.log(parseInt(X));
}
