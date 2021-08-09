// https://www.acmicpc.net/problem/14681 [사분면 고르기]

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  let x = input[0];
  let y = input[1];

if(x > 0) { (y > 0) ? console.log(1) : console.log(4) }  
else{ (y > 0) ? console.log(2) : console.log(3) }

process.exit();
});