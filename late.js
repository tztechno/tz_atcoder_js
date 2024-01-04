//ABC177_A late

##########################################


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

const [D,T,S] = input.split(' ').map(Number);

if (D/S<=T) {
    console.log("Yes");
} else {
    console.log("No");    
}

##########################################

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [D, T, S] = input.trim().split(' ').map(n => Number(n));

const ans = D <= (S * T) ? 'Yes' : 'No';
console.log(ans);


##########################################

function Main(input) {
    var input = input.split(" ");
    var result = (() => {
        return (parseInt(input[0], 10) / parseInt(input[2], 10) <= parseInt(input[1], 10)) ? "Yes" : "No";
    })();
    console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


##########################################
