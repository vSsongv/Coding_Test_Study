let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
// --------------------------------------------------------------
const fs = require('fs');
let input = fs.readFileSync(Path).toString().trim().split('\n');

const n = input[0];
let arr = [];
let answer = 0;

for (let i = 1; i <= n; i++) {
    let s = Number(input[i].split(' ')[0]);
    let e = Number(input[i].split(' ')[1]);
    arr.push([s, e]);
}

arr.sort((a, b) => a[0] - b[0]);

let start = arr[0][0];
let end = arr[0][1];

for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= end && arr[i][1] > end) { //앞의 구간과 겹친다면
        end = arr[i][1]; //현재 좌표의 x좌표만 바꿔줌
    }
    else if (arr[i][0] > end) { //겹치지 않는다면
        answer += (end - start); //asnwer에 앞의 구간 길이를 더해줌
        start = arr[i][0];
        end = arr[i][1];
    }
    //포함되는 경우 넘어가면 됨.
}
answer += (end - start);
console.log(answer); //마지막 좌표값끼리의 길이 더해야 함