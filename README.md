# tz_atcoder_js

### latest

---
```

```
---
```

```
---
```

```
---
```

```
---
```

```
---
```
for (let i = 0; i < N * 10; i++) {
  for (let j = 0; j < N; j++) {
```
---
```
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]); 
let A = input[1].split(" ").map(Number); 
```
---
```
Javascriptで数字文字列を各文字のリストにする
const charList = numberString.split("");
各文字を数字に変える
const numberList = charList.map(char => parseInt(char, 10));
数字リストの合計値を求める
const sum = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
```
---

