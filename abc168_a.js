//abc168_a.js
################################
if ([2, 4, 5, 7, 9].includes(a)) {
################################
################################
const i=require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n")
  .map(i=>i.trim().split(/\s+/).map(i=>isNaN(i)?i:i-0));
let [[a]]=i,y=["pon","pon","hon","bon","hon","hon","pon","hon","pon","hon"]
console.log(y[a%10])
################################
var x = require("fs").readFileSync("/dev/stdin","utf8")
var ns = parseInt(x,10)
var set =ns - Math.floor(ns/10)*10
var p = "hon"
if(set == 0 || set == 1 || set == 6 || set == 8){
    p = "pon"
}else if(set == 3){
    p = "bon"
}
console.log(p)
################################
const hon = ["2", "4", "5", "7", "9"];
const pon = ["0", "1", "6", "8"];
const N = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0];
if (hon.includes(N[N.length - 1])) {
  console.log("hon");
} else if (pon.includes(N[N.length - 1])) {
  console.log("pon");
} else {
  console.log("bon");
}
################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S = fs.readFileSync(filePath, "utf8").trim();
const a = parseInt(S.slice(-1));

if ([2, 4, 5, 7, 9].includes(a)) {
    console.log('hon');
} else if ([0, 1, 6, 8].includes(a)) {
    console.log('pon');
} else {
    console.log('bon');
}
################################
