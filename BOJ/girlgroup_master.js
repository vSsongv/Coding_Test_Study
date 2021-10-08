// https://www.acmicpc.net/problem/16165 [걸그룹 마스터 준식이]

const fs = require('fs');
//백준 제출시 여기 주석 풀기
// const readFileSyncAdress = '/dev/stdin';
//로컬 테스트 시 여기 주석 풀기
const readFileSyncAdress = 'input.txt';

let input = fs.readFileSync(readFileSyncAdress).toString().trim().split('\n');

let cnt = 1;
let girlgroupNum = input[0].split(' ')[0];
let quizNum = input[0].split(' ')[1];

let girlGroup = new Map();
let groupName = "";
let memNum = 0;
let Q = "";
let type = "";

for (let i = 0; i < girlgroupNum; i++, cnt++) {
  groupName = input[cnt];
  girlGroup.set(groupName, []);
  cnt += 1;
  memNum = input[cnt];
  for (let j = 0; j < memNum; j++) {
    (girlGroup.get(groupName)).push(input[++cnt]);
  }
}

for(let q = 0; q < quizNum; q++) {
  Q = input[cnt++];
  type = input[cnt++];
  if (type == 1) {
    for (let [key, val] of girlGroup) {
      if (val.includes(Q)) {
        console.log(key);//멤버 포함하고 있는 key그룹이름을 리턴해야함
      }
    }
  }
  else {
    girlGroup.get(Q).sort().forEach(m => {
      console.log(m);
    });
  }
}



