// https://www.acmicpc.net/problem/2116 [주사위 쌓기]

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

let N = inputs[0];
let dices = [];

for (let i = 1; i <= N; i++) {
  dices.push(inputs[i].split(' ').map((v) => +v));
}

let opp = [5, 3, 4, 1, 2, 0];
let answer = 0;
for (let i = 0; i < 6; i++) {
  let start = dices[0][i];
  let sum = 0;
  let maxNum = 0;
  for (let j = 0; j < dices.length; j++) {
    let side = dices[j].indexOf(start);
    let op = opp[side];
    let end = dices[j][op];
    if (start !== 6 && end !== 6) maxNum = 6;
    else if (start !== 5 && end !== 5) maxNum = 5;
    else maxNum = 4;
    sum += maxNum;
    start = end;
  }
  answer = Math.max(answer, sum);
}

console.log(answer);
