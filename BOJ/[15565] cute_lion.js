// https://www.acmicpc.net/problem/15565 [귀여운 라이언]

let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let N = parseInt(input[0].split(" ")[0]);
let target = parseInt(input[0].split(" ")[1]);
let arr = input[1].split(" ");

let answer = Infinity;

let left = 0, cnt = 0;
for (let right = 0; right < arr.length; right++) {
    if (parseInt(arr[right]) === 1) cnt += 1; //라이언인 경우에 cnt증가
    while (cnt >= target) {
        answer = Math.min(answer, right - left + 1);
        while (parseInt(arr[left++]) === 1) cnt -= 1; //다음 라이언 만날때까지 이동시키고 cnt 빼주기
    }
}

if (answer === Infinity) console.log(-1);
else console.log(answer);