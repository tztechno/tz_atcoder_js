//abc175_a rainy.js

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const A = fs.readFileSync(filePath, "utf8").trim();
let DP=[0,0,0,0]

for (let i = 0; i < 3; i++) {
    if (A[i]=='R') {
        DP[i+1]=DP[i]+1
    }
}
console.log(Math.max(...DP));
