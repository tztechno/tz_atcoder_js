abc078_b.js
#################################
#################################
#################################
#################################
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y, z] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
console.log(Math.floor((x - z) / (y + z)));
#################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const x = Number(S[0]);
const y = Number(S[1]);
const z = Number(S[2]);
console.log(Math.floor((x-z)/(y+z)));
#################################
[python]
X,Y,Z=map(int,input().split())
print((X-Z)//(Y+Z))
#################################
