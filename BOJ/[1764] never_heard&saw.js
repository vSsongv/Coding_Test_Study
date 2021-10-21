// https://www.acmicpc.net/problem/1764 [듣보잡]

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

let NheardN = Number(input[0].split(' ')[0]);
let NsawN = Number(input[0].split(' ')[1]);

let NheardMap = new Map();
let answer = [];

for (let i = 1; i <= NheardN; i++) {
    let name = input[i].replace('\r', '');
    NheardMap.set(name, 1);
}

for (let j = 1 + NheardN; j <= NheardN + NsawN; j++) {
    let name = input[j].replace('\r', '');
    if (NheardMap.get(name)) answer.push(name);
}

console.log(answer.length);
answer.sort();
console.log(answer.join('\n'));