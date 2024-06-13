abc080_b.js
##########################################
Javascriptで数字文字列を各文字のリストにする
const charList = numberString.split("");
各文字を数字に変える
const numberList = charList.map(char => parseInt(char, 10));
数字リストの合計値を求める
const sum = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
##########################################
##########################################
##########################################
##########################################
##########################################
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
function main(input) {
    const N = Number(input.trim());
    // console.log(f(N));
    if (N % f(N) === 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
function f(n) {
    return String(n).split('').map(Number).reduce((a, c) => a + c, 0);
}
##########################################
const main = (input) => {
  input = input.split("\n");
  const numberString = input[0];
  const charList = numberString.split("");
  const numberList = charList.map(char => parseInt(char, 10));
  const sm = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const X = parseInt(numberString);
  if (X%sm==0) {
    console.log('Yes');    
  } else {
    console.log('No');    
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
##########################################
[python]
X=str(input())
M=0
for x in list(X):
  M+=int(x)
if int(X)%M==0:
  print('Yes')
else:
  print('No')
##########################################
