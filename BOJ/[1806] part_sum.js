// https://www.acmicpc.net/problem/1806 [부분합]

let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
let input = require("fs").readFileSync(Path).toString().trim().split("\n");

let num = Number(input[0].split(" ")[0]);
let target = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);

let left = 0; let answer = 1000000; let sum = 0;
for (let right = 0; right < num; right++) {
    sum += arr[right]; //left를 움직여도 target보다 작다면
    while (sum >= target) { //left를 이동시켜도 target보다 크다면 right를 증가시키지 않고 계속 체크
        if (sum >= target) answer = Math.min(answer, right - left + 1); //m보다 커지면 answer를 update해준다.
        sum -= arr[left++];
    }
}
if (answer === 1000000) console.log(0);
else console.log(answer);