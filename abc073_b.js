abc073_b.js
#######################################
#######################################
#######################################
#######################################
function Main(input) {
    var input = input.split("\n");
    var kaisuu = parseInt(input[0], 10) + 1;
    var ninnzuu = 0;
    for(c = 1;c < kaisuu;c++){
        var memo = input[c].split(" ");
        var a = parseInt(memo[0], 10);
        var b = parseInt(memo[1], 10)
        var a = b-a+1;
        var ninnzuu = ninnzuu + parseInt(a, 10);
    }
    console.log(ninnzuu);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
#######################################
[N,...L]=(require('fs').readFileSync(0)+'').trim().split(/\D/).map(e=>+e)
a=0;for(i=0;i<N;i++){a+=(L[2*i+1]-L[2*i])}
console.log(a+N)
#######################################
const input = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
const N = parseInt(input.shift(), 10);
let cnt = 0;
for (let i = 0; i < N; i++) {
  let [l, r] = (input[i].split(" ")).map(x => parseInt(x, 10));
  cnt += r - l + 1;
}
console.log(cnt);
#######################################
[MY AC: input共用]

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0]

let t = 0
for (let i = 0; i < n; i++) {
    let [l,r] = input[i+1].split(' ').map(Number);
    t+=r-l+1;
}
console.log(t);
#######################################
