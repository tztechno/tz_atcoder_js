//abc092_a.js
################################
[read lines]
const lines = input.trim().split("\n");
################################
################################
################################
################################
################################
var x = require("fs").readFileSync("/dev/stdin","utf8")
var ns = x.trim().split("\n").map(r => parseInt(r,10))
console.log(Math.min(ns[0],ns[1]) + Math.min(ns[2],ns[3]))
################################
function Main(input) {
  const args = input.trim().split('\n')
  const [a, b, c, d] = args.map(x => x.split(' ').map(y => parseInt(y)))
  console.log(Math.min(a, b) + Math.min(c, d))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

################################
'use strict';

function main (input) {
    const lines = input.trim().split("\n");
    const A = parseInt(lines[0]);
    const B = parseInt(lines[1]);
    const C = parseInt(lines[2]);
    const D = parseInt(lines[3]);

    console.log(Math.min(A, B)+Math.min(C,D));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);

function min(a, b) {
  return a < b ? a : b;
}

const ans = min(a, b) + min(c, d);
console.log(ans);
################################
