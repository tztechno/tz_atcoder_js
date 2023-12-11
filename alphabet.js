const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const x = fs.readFileSync(filePath, "utf8").trim();

if (x === x.toLowerCase()) {
    console.log('a');
} else {
    console.log('A');
}
