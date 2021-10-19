// https://www.acmicpc.net/problem/2512 [예산]
// need to study!!
//백준제출시 주석
let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
const input = require("fs").readFileSync(Path).toString().trim().split("\n");
let num = input[0];
let budgets = new Array(num);
budgets = input[1].split(" ").map(Number);
let setMoney = Number(input[2]);

let max = Math.max(...budgets);
let min = 0, propalBudget = 0;
while (min <= max) {
    let mid = parseInt((min + max) / 2);
    let sum = 0;
    budgets.forEach(a => {
        sum += Math.min(mid, a)
    });
    if (sum > setMoney) max = mid - 1;
    else {
        min = mid + 1;
        propalBudget = Math.max(propalBudget, mid);
    }
}
console.log(propalBudget);
