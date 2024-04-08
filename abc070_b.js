abc070_b.js
##############################
##############################
##############################
##############################
##############################
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C, D] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

console.log(Math.max(0, Math.min(B, D) - Math.max(A, C)));
##############################
'use strict';

const main = (input) => {
  const [A, B, C, D] = input.trim().split(' ').map(Number);
  if (Math.max(A, C) > Math.min(B, D)) {
    console.log(0);
  } else {
    console.log(Math.abs(Math.max(A, C) - Math.min(B, D)));
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
##############################
const [A, B, C, D] = ((require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(" ")).map(x => parseInt(x, 10));
console.log(Math.max(Math.min(B, D) - Math.max(A, C), 0));
##############################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a,b,c,d] = input[0].split(" ").map(Number);
const t=Math.max(Math.min(b,d)-Math.max(a,c),0);
console.log(t);
##############################
