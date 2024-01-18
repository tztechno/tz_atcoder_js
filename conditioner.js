//abc174_a conditioner.js

####################################
####################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const X = fs.readFileSync(filePath).toString().split("\n")[0];

if (X>=30) {
    console.log('Yes')    
} else {
    console.log('No')    
}
####################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const X = fs.readFileSync(filePath).toString().split("\n")[0];

const judge = Number(X >= 30);  
const ANS = ['No','Yes'];
console.log(ANS[judge]);
####################################
