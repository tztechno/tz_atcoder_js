//ABC192_B lowerupper

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S = fs.readFileSync(filePath).toString().split("\n")[0];

let U=""
let L=""
const n=S.length

for (let i = 0; i < n; i++) {
  if (i%2==0) {
      L=L+S[i];
  } else {
      U=U+S[i]  
  }
}
if (U === U.toUpperCase() && L === L.toLowerCase()) {
  console.log('Yes');
} else {
  console.log('No');
}
