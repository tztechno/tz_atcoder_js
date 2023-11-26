const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const A = input;

if (A === 'Hello,World!') {
    console.log('AC');
} else {
    console.log('WA');
}
