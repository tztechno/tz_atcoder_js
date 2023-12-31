//ABC178_A 
//Not

#########################################

function Main(input) {
    var input = Number(input.split("\n")[0]);
    var result = (() => {
        return Number(input == 0);
    })();
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

#########################################

const i=require("fs").readFileSync("/dev/stdin","utf8").trim().split("\n")
  .map(i=>i.trim().split(/\s+/).map(i=>isNaN(i)?i:i-0));
let [[a]]=i
console.log(1-a)

#########################################

const fs = require("fs");
function readInput() {
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  return fs.readFileSync(filePath, "utf8").trim();
}
const N = parseInt(readInput());
if (N === 1) {
  console.log(0);
} else {
  console.log(1);
}

#########################################
