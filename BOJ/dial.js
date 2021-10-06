// https://www.acmicpc.net/problem/5622

const dial = { 'A': 3, 'B':3, 'C': 3, 'D':4, 'E':4, 'F': 4,
 'G':5, 'H':5, 'I': 5, 'J':6, 'K':6, 'L': 6,
 'M':7, 'N':7, 'O':7, 'P':8, 'Q':8, 'R':8, 'S': 8,
 'T':9, 'U':9, 'V': 9, 'W':10, 'X': 10, 'Y': 10, 'Z': 10 }

let fs = require('fs');
// let alpha = fs.readFileSync('/dev/stdin').toString().split(' ');
let alpha = fs.readFileSync('input.txt').toString().trim().split(' ');
alpha = String(alpha);
let str = alpha.split('');
let time = 0;

for(let i = 0; i < str.length; i++) {
    time += dial[str[i]];
}

console.log(time);

// const fs = require('fs');

// // const readFileSyncAdress = '/dev/stdin';

// const readFileSyncAdress = 'input.txt';

// let input = fs.readFileSync(readFileSyncAdress).toString().trim().split(' ');
// input = input[0];

// let time = 0;

// const dial = { 'A': 3, 'B':3, 'C': 3, 'D':4, 'E':4, 'F': 4,
//  'G':5, 'H':5, 'I': 5, 'J':6, 'K':6, 'L': 6,
//  'M':7, 'N':7, 'O':7, 'P':8, 'Q':8, 'R':8, 'S': 8,
//  'T':9, 'U':9, 'V': 9, 'W':10, 'X': 10, 'Y': 10, 'Z': 10, };

//  input.split('').forEach(alpha => time += dial[alpha]);

//  console.log(time);

 