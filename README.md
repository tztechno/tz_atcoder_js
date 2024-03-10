# tz_atcoder_js

### 新採用

const main = (input) => {
    const S = input.trim();

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));



### 旧採用

    const fs = require("fs");  
    const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";  
    const input = fs.readFileSync(filePath).toString().split("\n")[0];  

