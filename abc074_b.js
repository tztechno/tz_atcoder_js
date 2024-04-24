abc074_b.js
#######################################
#######################################
#######################################
function Main(input){
    input = input.split("\n");
    x = input[2].split(" ");
  	N = input[0];
  	K = input[1];
    sum = 0;
  	for(let i = 0; i < N; i++){
      	moveA = parseInt(x[i]) * 2;
      	moveB = (K - parseInt(x[i])) * 2;
      	sum += Math.min(moveA, moveB);
    }
  	console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
#######################################
[N,K,...x]=(require('fs').readFileSync(0)+'').split(/\D/)
a=0;for(i=0;i<N;i++)a+=2*(Math.min(x[i],Math.abs(K-x[i])))
console.log(a)
#######################################
[[N],[K],[...i]]=require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n").map(n=>n.split(" ").map(Number)),m=0;
for(c=0;c<N;c++) m+=Math.min(...[i[c],K-i[c]].map(n=>Math.abs(n)))*2;
console.log(m);
#######################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const K = input[1];
const X = input[2].split(" ").map(Number);
let S = 0;
for (let i = 0; i < N; i++) {
  S +=Math.min(X[i], K - X[i]) * 2;
}
console.log(S);
#######################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const K = parseInt(input[1]);
const X = input[2].split(" ").map(Number);
let S = 0;
for (let i = 0; i < N; i++) {
  S += Math.min(X[i], K - X[i]) * 2;
}
console.log(S);
#######################################
