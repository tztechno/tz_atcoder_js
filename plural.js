//ABC179_A
//plural


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S = fs.readFileSync(filePath).toString().split("\n")[0];
const length=S.length
if (S[length-1]=="s") {
  console.log(S+"es") 
}
else {
  console.log(S+"s") 
}
