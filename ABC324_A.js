async function main(input) {
  data = input.split("\n");
  a = data[1].split(" ")
  a.every(d => d === a[0]) ? console.log("Yes") : console.log("No")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
