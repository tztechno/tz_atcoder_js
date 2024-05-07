

const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const a = Number(S[0]);
const b = Number(S[1]);
console.log( Math.floor((a+b+1)/2) );
