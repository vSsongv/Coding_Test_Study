//1줄 입력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  console.log("hello !", line);
  rl.close();
}).on("close", function() {
  process.exit();
});

//2줄, 3줄일 경우
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    console.log(input);
    process.exit();
});

//백준 입력 예제 받아서 실행할 수 있음
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const data=Number(input);

for (let i=1;i<=data;i++){
 console.lot(i);
 }