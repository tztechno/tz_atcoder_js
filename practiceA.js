//practiceA.js
##################################
1
2 3
test
##################################
##################################
##################################
##################################
##################################
##################################
##################################
##################################
function Main(input) {
    input = input.trim().split("\n");
    const a = parseInt(input[0], 10);
    const [b, c] = input[1].split(" ").map(Number);
    const s = input[2];
    console.log('%d %s', a+b+c, s);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
##################################
const main = (inputs) => {
  const a = inputs[0][0];
  const b = inputs[1][0];
  const c = inputs[1][1];
  const s = inputs[2].join()
  console.log((Number(a)+Number(b)+Number(c))+" "+s)
}
main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(a=>a.split(" ")));
##################################
function Main(input) {
    input = input.trim().split("\n");
    inputNumber1 = Number(input[0]);
    const [inputNumber2,inputNumber3] = input[1].split(" ").map(Number);
    inputString = String(input[2])
    console.log(inputNumber1+inputNumber2+inputNumber3, inputString)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

##################################
