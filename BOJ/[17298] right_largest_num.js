// https://www.acmicpc.net/problem/17298 [오큰수]

const [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split(/\s+/).map(v => +v);

let stack = [];
let answer = new Array(n).fill(-1); //-1로 채워놓고

for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) { //arr의 stack의 index값이 arr의 다음 값보다 작으면
        answer[stack.pop()] = arr[i]; //index를 pop해주고 answer의 해당 index에 현재 비교하고 있는 값 넣어주기.
    }
    stack.push(i); //큰 값을 못 찾았으니까 push!
}
console.log(answer.join(" "));