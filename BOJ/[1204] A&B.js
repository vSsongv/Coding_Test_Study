// https://www.acmicpc.net/problem/12904 [A와 B]

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const origin = inputs[0].trim();
let target = inputs[1].trim();

const isPossible = (target, origin) => {
  for (let i = target.length - 1; i >= 0; i--) {
    if (origin === target) {
      return 1;
    }
    if (target[i] === 'A') target = target.substring(0, i);
    else {
      target = target.substring(0, i).split('').reverse().join('');
    }
  }
  return 0;
};

console.log(isPossible(target, origin));
