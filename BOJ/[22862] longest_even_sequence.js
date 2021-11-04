// https://www.acmicpc.net/problem/22862 [가장 긴 짝수 부분수열]

let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
const fs = require('fs');
let input = fs.readFileSync(Path).toString().trim().split('\n');

let n = parseInt(input[0].split(" ")[0]);
let target = parseInt(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);

let left = 0;
let cnt = 0;
let answer = 0;
for (let right = 0; right < n; right++) {
    if (arr[right] % 2 !== 0) cnt += 1; //홀수면 cnt 증가
    while (cnt > target) { //홀수 개수가 target개수를 넘으면
        if (arr[left] % 2 !== 0) cnt -= 1; //그러나 left값도 홀수일 수도 있음 그럼 cnt개수는 여전히 k개를 넘은 상태
        left += 1; //left이동
    }
    answer = Math.max(answer, (right - left + 1 - cnt));
}

console.log(answer);