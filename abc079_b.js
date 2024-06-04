abc079_b.js
##########################################
##########################################
##########################################
const n = BigInt(require('fs').readFileSync(0, 'utf8').trim());

function lucas_number(n) {
  if (n === 0n) {
    return 2n;
  } else if (n === 1n) {
    return 1n;
  } else {
    let a = 2n;
    let b = 1n;
    for (let i = 2n; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

function calculate() {
  const result = lucas_number(n);
  return result;
}

console.log(calculate().toString());
##########################################
function Main(input){
  min = 1e9
  max = -1e9
  let abc = ["abcdefghijklmnopqrstuvwxyz"]
  
  input = parseInt(input.trim())
  f = 2n
  s = 1n
  for(i = 0;i<input-2;i++){
    [f,s] = [s,f+s]
  }
  res = f+s
  if(input == 1) res = 1
  
  console.log(`${res}`)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
##########################################
N=BigInt(require('fs').readFileSync(0))
D=[2n,1n]
f=(a)=>D[a]!=undefined?D[a]:D[a]=f(a-1n)+f(a-2n)
console.log(f(N)+'')
##########################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const N = S[0];
let L = [BigInt(2), BigInt(1)];
for (let i = 2; i <= N; i++) {
  L.push(L[i-2] + L[i-1]);
}
console.log(L[N].toString());
##########################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const N = S[0];
let L = [BigInt(2), BigInt(1)];
for (let i = 2; i <= N; i++) {
  L.push(L[L.length - 2] + L[L.length - 1]);
}
console.log(L[N].toString());
##########################################
[WA]
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const N = Number(S[0]);
let L=[2,1]
for (let i = 2; i < N+1; i++) {
  L.push(L[i-2]+L[i-1])
}
console.log(L[N]);
##########################################
[python]
N=int(input())
L=[2,1]
for i in range(N-1):
    L+=[L[-2]+L[-1]]
print(L[-1])
##########################################
