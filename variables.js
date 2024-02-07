
//abc170_a variables.js
#####################################
const main = (input) => {
    const arr = [...(input.trim().split(' '))];
    console.log(arr.indexOf('0') + 1);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
#####################################
function main(input) {
  const args = input.split("\n")[0].split(" ");
  const res = args.findIndex(el=>el === "0")
  console.log(res + 1)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
#####################################
const main = input => {
  const x = input.trim().split(' ');
  
  for (let i = 0; i < 5; i++) {
    if (x[i] === '0') {
      console.log(i + 1)
    }
  }
}
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
main(input);
#####################################
const main = (input) => {
  const [x1, x2, x3, x4, x5] = input.split(" ").map(Number);
  const arr = [x1, x2, x3, x4, x5];
​
  for (i in arr) {
    if (arr[i] === 0) console.log(Number(i) + 1);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
#####################################
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [nums] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
console.log(nums.indexOf(0) + 1);
​
#####################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];
const X = input.split(' ')
for (let i=0; i<5; i++) {
    if (X[i]==0) {
        console.log(i+1);
        break;
    }
}
#####################################
