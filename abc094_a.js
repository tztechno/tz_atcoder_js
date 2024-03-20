//abc094_a.js
####################################
[a,b,c]=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split(" ").map(Number);
####################################
####################################
####################################
####################################
####################################
####################################
function Main(input) {
  const lines = input.trim().split('\n');
  const [A, B, X] = lines[0].split(' ').map(ele => parseInt(ele));
  console.log(A <= X && A + B >= X ? 'YES' : 'NO');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
####################################
[a,b,c]=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split(" ").map(Number);
console.log(((a<=c)&&(a+b>=c))?"YES":"NO");
####################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const a=Number(S[0])
const b=Number(S[1])
const x=Number(S[2])
if (a<=x && x<=a+b) {
  console.log("YES");
} else {
  console.log("NO");
}
####################################
