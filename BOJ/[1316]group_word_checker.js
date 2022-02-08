// https://www.acmicpc.net/problem/1316 [그룹 단어 체커]

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./input.txt').toString().split('\n');

const stringsNum = Number(input[0]);
let groupWordNum = 0;

for (let i = 1; i <= stringsNum; i++) {
  const string = input[i];
  const checkArr = [];
  let isGroupWord = true;

  for (let j = 0; j < string.length; j++) {
    if (checkArr.indexOf(string[j]) === -1) {
        checkArr.push(string[j]);
    } else {
      if (checkArr.indexOf(word[j]) !== checkArr.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    groupWordNum += 1;
  }
}

console.log(groupWordNum);
