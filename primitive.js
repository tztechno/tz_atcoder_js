const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [A,B,C] = input.split(' ').map(Number);

if (C==0) {
  if (A<=B){
    console.log("Aoki")
  } else {
    console.log("Takahashi")
  }} 
else {
  if (B<=A) {
    console.log("Takahashi")
  } else {
    console.log("Aoki")
  }}  


