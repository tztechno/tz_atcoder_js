#ABC181_A
#rotation
#input= 5


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().split("\n")[0];

if (N%2==0) {
    console.log('White');
} else {
    console.log('Black');      
}
