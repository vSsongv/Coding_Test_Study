// https://www.acmicpc.net/problem/2493 [탑]

// const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split(/\s+/).map(v => +v);
let stack = [];
stack.push([arr[0], 1]);
let answer = new Array(n).fill(0);
for (let i = 1; i < n; i++) {
  while (stack.length) {
    if (stack[stack.length - 1][0] > arr[i]) { //현재 스택의 top의 top높이가 나보다 크면 내 신호 받을 수 있음. 
      answer[i] = stack[stack.length - 1][1]; //index answer에 넣어주기.
      break;
    }
    stack.pop(); //top 빼주고
  }
  stack.push([arr[i], i + 1]); //다음 top stack에 넣음
}

console.log(answer.join(" "));