abc072_b.js
######################################
######################################
######################################
######################################
######################################
function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  // console.log(nums[0]) // [3]
  const inputStrings = nums[0];
  let resultStrings = "";
  for (let i = 0; i < inputStrings.length; i++) {
    if (i % 2 === 0) { 
      resultStrings += inputStrings[i];
    }
  }
  console.log(resultStrings);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
######################################
i=require("fs").readFileSync("/dev/stdin","utf8").split("\n")[0].split(""),t="";
i.map((v,n)=>{if(!(n%2)) t+=v}),console.log(t);
######################################
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let result = '';

for (let i = 0; i < input.length; i += 2) {
    result += input[i];
}

console.log(result);
######################################
const S = [...(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0]];
let l = [];
for (let i = 0; i < S.length; i++) {
  if (i % 2 === 0) {
    l.push(S[i]);
  }
}
console.log(l.join(""));
######################################
const main = (input) => {
    const S = input.trim();
    let A = "";
    let n = S.length;
    for(let i = 0; i < n; i += 2) {
        A += S[i];
    }
    console.log(A);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
######################################
