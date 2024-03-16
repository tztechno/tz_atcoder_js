//abc093_a.js
####################################
####################################
####################################
####################################
####################################
####################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0];
if (S[0] != S[1] && S[1] != S[2] && S[2] != S[0]) {
  console.log("Yes");
} else {
  console.log("No");
}
####################################
function Main(input) {
  const S = input.trim()

  const st = new Set(S)
  console.log(st.size == 3 ? 'Yes' : 'No')
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
####################################
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [s] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

console.log([...s].sort().join('') === 'abc' ? 'Yes' : 'No');
####################################
const main = (input) => {
    const S = input.trim().split('').sort().join('');
    if (S === 'abc') {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
####################################
