https://www.acmicpc.net/problem/2737 [연속합]

let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
const fs = require('fs');
let input = fs.readFileSync(Path).toString().trim().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let cnt = 1;
    let answer = 0;
    cnt += 1;
    input[i] = Number(input[i]);
    input[i] -= 1;
    while (input[i] > 0) {
        input[i] -= cnt;
        if ((input[i] % cnt) === 0) answer += 1;
        cnt += 1;
    }
    console.log(answer);
}