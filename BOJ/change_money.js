// https://www.acmicpc.net/problem/5585 [거스름돈]

// const input = require('fs').readFileSync('/dev/stdin').toString().trim();    
const input = require('fs').readFileSync('input.txt').toString().trim();

let answer = 0;
let money = [500, 100, 50, 10, 5, 1];
let change = 1000 - Number(input);

for(let coin of money) {
    while(change >= coin) {
        change -= coin;
        answer += 1;
    }
}
console.log(answer);