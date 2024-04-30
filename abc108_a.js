abc108_a.js
##############################################
##############################################
##############################################
##############################################
i=Number(require("fs").readFileSync("/dev/stdin","utf8").split("\n")[0]),cnt=0;
for(a=0;a<i;a++){
    for(b=a+1;b<i;b++){
        if((a%2)+(b%2)==1) cnt++;
    }
}
console.log(cnt);
##############################################
const main = (input) => {
  input = input.split("\n");
  const N = parseInt(input[0])
  
  const num_even = Math.floor(N / 2);
  const num_odd = N - num_even;
  
  console.log(num_even * num_odd);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
##############################################
const S = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"))[0].split(' ');
const n = Number(S[0]);
const ans = Math.floor(n/2)*Math.floor((n+1)/2);
console.log(ans);
##############################################
[python]
N=int(input())
print((N//2)*((N+1)//2))
##############################################
