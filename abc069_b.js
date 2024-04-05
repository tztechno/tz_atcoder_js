abc069_b.js
#########################################
#########################################
#########################################
#########################################
#########################################
function Main(input) {
  const S = input.trim()
  const len = S.length - 2
  console.log(S[0] + len + S[len + 1])
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
#########################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0];
console.log(S[0] + String(S.length - 2) + S[S.length - 1]);
#########################################
const main = (input) => {
  const s = input.trim().split("");
  const ans = `${s[0]}${s.slice(1, -1).length}${s[s.length - 1]}`;
  console.log(ans);
};
const input = require("fs").readFileSync("/dev/stdin", "utf8");
main(input);
#########################################
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main(S){
  S = S.trim();
  n=S.length;
  console.log('%s%d%s',S[0],n-2,S[n-1]);
};
#########################################
