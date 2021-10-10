// https://dpsc615.tistory.com/140 [단어 정렬하기]

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValues = new Set(sorted);
console.log(Array.from(uniqueValues).join('\n'));