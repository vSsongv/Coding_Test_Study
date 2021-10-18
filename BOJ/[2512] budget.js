// https://www.acmicpc.net/problem/2512 [예산]
// need to study!!
//백준제출시 주석
let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
const input = require('fs').readFileSync(Path).toString().trim().split('\n');
let num = input[0];
let budgets = [];
for (let i = 0; i < num; i++) {
    budgets.push(Number(input[1].split(' ')[i]));
}
budgets.sort((a, b) => a - b);

let setMoney = Number(input[2]);
let sum = budgets.reduce((a, b) => a + b);

if (sum <= setMoney) { //모두 배분 가능하면
    console.log(Math.max(...budgets));
}
else {
    function getSum(mid) {
        let sum = 0;
        budgets.forEach(a => {
            sum += Math.min(mid, a)
        })
        console.log(sum);
        return sum
    }

    let max = budgets[num-1];
    let min = 0, propalBudget = 0;
    while (min <= max) {
        let mid = parseInt((min + max) / 2);
        let tmp = getSum(mid)
        console.log(mid, tmp);
        if (tmp > setMoney) {max = mid - 1; console.log("m", mid, "t", tmp, "max", max);}
        else {
            min = mid + 1;
            console.log("m", min, "d", mid, "p",propalBudget);
            if (propalBudget < min) propalBudget = mid;
        }
    }
    console.log(propalBudget);
}
