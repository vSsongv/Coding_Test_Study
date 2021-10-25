https://www.acmicpc.net/problem/1644 [소수의 연속합]

const fs = require("fs");
let Path = "input.txt";
// let Path = "/dev/stdin"
let input = fs.readFileSync(Path).toString().trim().split(' ');

let n = Number(input[0]);
// 에라토스테네스의 체
let primes = [];
let check = new Array(n + 1).fill(true);
for (let i = 2; i * i <= n; i++) {
    if (!check[i]) continue;
    for (let j = i * i; j <= n; j += i) {
        check[j] = false;
    }
}
for (let i = 2; i <= n; i++) {
    if (check[i]) primes.push(i);
}

let left = 0, sum = 0, cnt = 0;
for (let right = 0; right < primes.length; right++) {
    sum += primes[right];
    while (sum > n) {
        sum -= primes[left];
        left++;
    }
    if (sum === n) cnt++;
}
console.log(cnt);