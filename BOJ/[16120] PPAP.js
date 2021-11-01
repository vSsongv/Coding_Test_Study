// https://www.acmicpc.net/problem/16120 [PPAP]

const str = require('fs').readFileSync('input.txt').toString().trim();
let cnt = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'P') cnt += 1; //P를 만나면 cnt개수 하나씩 증가
    if (str[i] === 'A') {
        if (cnt >= 2 && str[i + 1] === 'P') {
            cnt -= 2;
        }
        else { //A뒤에 P가 아니거나 A앞에 P가 2개 이상 없으면 바로 틀린거임
            console.log('NP');
            return;
        }
    }
}
if (cnt === 1) console.log('PPAP');
else console.log('NP');