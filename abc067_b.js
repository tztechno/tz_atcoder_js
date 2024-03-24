abc067_b.js
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
#########################################
'use strict';
const main = (input) => {
  let [A, B] = input.trim().split('\n');
  const [N, K] = A.split(' ').map(Number);
  let l = B.split(' ').map(Number);
  l = l.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < K; i++) {
    ans += l[i];
  }
  console.log(ans);
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
#########################################
const main = (input) => {
  input = input.trim().split('\n');
  N = parseInt(input[0].split(' ')[0], 10);
  K = parseInt(input[0].split(' ')[1], 10);
  L = input[1].split(' ');

  L = L.map(input => parseInt(input, 10));
  L.sort((a, b) => b - a);

  sum = 0;
  for (let i = 0; i < K; i++) {
    sum += L[i];
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));

#########################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number); // Splitting and converting to numbers
let L = input[1].split(" ").map(Number); // Splitting and converting to numbers
L.sort((a, b) => b - a); // Sorting in descending order

const sum = L.slice(0, k).reduce((acc, curr) => acc + curr, 0); // Taking first k elements and calculating sum
console.log(sum);
#########################################
