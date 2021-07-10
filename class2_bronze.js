// https://www.acmicpc.net/problem/2798 [블랙잭] - 브루트 포스(brute force)

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(item => parseInt(item));

let N = parseInt(input[0]);
let M = parseInt(input[1]);
let sum = 0;
let cards = input.slice(2); //2번째 줄부터 입력받은 숫자들을 배열 형태로 저장.

for(let i = 0; i < N-2; i++){
    for(let j = i+1; j < N-1; j++){
        for(let k = j+1; k < N; k++){
            if(cards[i]+cards[j]+cards[k] <= M && cards[i]+cards[j]+cards[k] > sum){
                    sum = cards[i]+cards[j]+cards[k];
            }
        }
    }
}

console.log(sum);
