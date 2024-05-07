abc077_b.js
##############################################
##############################################
##############################################
##############################################
function main(input) {
  const args = input.split('\n');
  const N = parseInt(args[0],10);
  console.log(Math.floor(Math.sqrt(N)) ** 2);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
##############################################
const N = parseInt((require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0], 10);
console.log(Math.floor(Math.sqrt(N)) ** 2);
##############################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const n = Number(S[0]);
var m = Math.floor(Math.sqrt(n))
console.log(m**2)
##############################################
[python]
import math
n=int(input())
m=int(math.sqrt(n))
print(m**2)
##############################################
