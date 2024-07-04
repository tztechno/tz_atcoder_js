abc081_b.js
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	array = input[1].split(" ");
	tmpArray = array.map((item) => {
	  for (let i=0; i < Math.log2(10**9) + 1;i++){
	    if(item % 2 === 1 ){
	    return i
	  }
	  item = item / 2
	  }
	  return 0
	})
	console.log(Math.min(...tmpArray));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
##########################################
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let numbers = input[1].split(' ');
let count = 0;
let answer = 0;
var i = 0;
while(true){
    if(Number(numbers[i])%2==1)
        answer++;
    numbers[i] = Number(numbers[i])/2;
    if(answer > 0)
        break;
    if(i==Number(input[0])){
        count++;
        i=0;
    }
    i++;
}
console.log(count);
##########################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]); 
let A = input[1].split(" ").map(Number); 

let B = [...A]; 
let flag=1
for (let i = 0; i < N * 10; i++) {
  for (let j = 0; j < N; j++) {
    let bj = B[j];
    if (bj % 2 === 0) {
      B[j] = Math.floor(bj / 2); 
    } else {
      console.log(i); 
      flag=0
      break; 
    }
  }
  if (flag==0) {
    break;
  }
}
##########################################
[python]
N=int(input())
A=list(map(int,input().split()))
B=A
for i in range(N*10):
  for j in range(N):
    bj=B[j]
    if bj%2==0:
        B[j]=bj//2
    else:
        print(i)
        exit()
##########################################
