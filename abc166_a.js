//abc166_a.js
################################
################################
################################
################################
function Main(input) {
    var input = input.split("\n")[0];
    if(input == "ABC"){
        console.log("ARC")
    }
    else {
        console.log("ABC")
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
################################
function Main(input) {
  const s = input.trim();
  console.log(s === "ABC" ? "ARC" : "ABC");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
################################
### 採用
const main = (input) => {
    const S = input.trim();
    if (S === 'ABC') {
        console.log('ARC');
    } else {
        console.log('ABC');
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
################################
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const S = fs.readFileSync(filePath, "utf8").trim();

if (S=="ABC") {
    console.log("ARC");
} else {
    console.log("ABC");
}
################################
