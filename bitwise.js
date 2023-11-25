const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [A, B] = input.split(' ').map(Number);

for (let i = 0; i < 256; i++) {
  if ((A ^ i) === B) {
      console.log(i);
      break;
    }
  }
