// https://www.acmicpc.net/problem/2110 [공유기 설치]

let Path = "input.txt"
//로컬 테스트시 주석
//let Path = "/dev/stdin"
const fs = require('fs');
const input = fs.readFileSync(Path).toString().trim().split('\n');

let n = input[0].split(' ')[0];
let routerNum = input[0].split(' ')[1];
let arr = new Array(n);
let answer = 0;

for (let i = 0; i < n; i++) {
    arr[i] = Number(input[i + 1]);
}

arr.sort((a, b) => a - b); //정렬해주고

let left = arr[1] - arr[0]; //제일 가까울 때
let right = arr[arr.length - 1] - arr[0]; //제일 멀리 떨어졌을때

function isValid(arr, dist) {
    let cnt = 1, point = arr[0];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] - point >= dist) {
            cnt += 1;
            point = arr[j]; //j위치에 공유기 설치할 수 있으니까 위치 옮기기
        }
    }
    return cnt;
}

while (left <= right) {
    let mid = parseInt((right + left) / 2);
    let curNum = isValid(arr, mid);
    if (curNum >= routerNum) { //router 개수보다 많으면 더 넓게 세워야 됨
        answer = mid;
        left = mid + 1;
    }
    else right = mid - 1; //router개수보다 적으면 더 좁게 세워야 됨
}

console.log(answer);