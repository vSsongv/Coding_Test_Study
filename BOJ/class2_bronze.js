// https://www.acmicpc.net/problem/2798 [블랙잭] - 브루트 포스(brute force) 알고리즘 : 무식한 완전탐색 알고리즘!
// https://tesseractjh.tistory.com/4(참고)

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(parseInt(line));
// }).on('close', function () {
//   let N = parseInt(input[0]);
//   let M = parseInt(input[1]);
//   let sum = 0;
//   let cards = input.slice(2); //2번째 줄부터 입력받은 숫자들을 배열 형태로 저장.
  
//   for(let i = 0; i < N-2; i++){ 
//       for(let j = i+1; j < N-1; j++){
//           for(let k = j+1; k < N; k++){
//               if(cards[i]+cards[j]+cards[k] <= M && cards[i]+cards[j]+cards[k] > sum){
//                       sum = cards[i]+cards[j]+cards[k];
//               }
//           }
//       }
//   }
  
//   console.log(sum);

// process.exit();
// });

//https://www.acmicpc.net/problem/4153 [직각삼각형]

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    if(line == '0 0 0') rl.close();
    else input.push(line);
  })
  .on('close', function () {
    for (let i = 0; i < input.length; i++) {
      let nums = input[i].split(" ");
      nums.sort((a,b) => a - b);
      let num1 = Number(nums[0]);
      let num2 = Number(nums[1]);
      let num3 = Number(nums[2]);
    
      if ((num1 * num1) + (num2 * num2) == num3 * num3) console.log("right");
      else console.log("wrong");
    }
    process.exit();
});
