abc068_b.js
#########################################
#########################################
#########################################
#########################################
function Main(n){
 n = parseInt(n.trim());
 
  if(n === 1){
   console.log(n);
    return;
  };
  
  for(let i = 2; i <= n; i *= 2) {
   ans = i;
  };
  console.log(ans);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
#########################################
const Main = (args) => {
  let N = Number(args.trim());

  if (N === 1) {
    console.log(N);
    return;
  }

  let ans;
  for (let i = 2; i <= N; i *= 2) {
    ans = i;
  }
  console.log(ans);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
#########################################
const N = parseInt((require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0], 10);
for (let i = 1; i < 8; i++) {
  if (N < 2 ** i) {
    console.log(2 ** (i - 1));
    break;
  }
}
#########################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);

let ans=0
for (let i=0; i<n+1; i++) {
  if (2**i<=n) {
  ans=2**i    
  }
  else
    break    
}
console.log(ans)
#########################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S = fs.readFileSync(filePath, "utf8").trim();
const n = parseInt(S);

let ans=0
for (let i=0; i<n+1; i++) {
  if (2**i<=n) {
  ans=2**i    
  }
  else
    break    
}
console.log(ans)
#########################################
