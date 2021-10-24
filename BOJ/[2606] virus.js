// https://www.acmicpc.net/problem/2606 [바이러스]

// let Path = "input.txt"
//로컬 테스트시 주석
let Path = "/dev/stdin"
const input = require('fs').readFileSync(Path).toString().trim().split('\n');
let pcNum = Number(input[0]);
let pairNum = Number(input[1]);
let PCs = [...Array(pcNum)].map(() => []); //pc graph
let answer = 0;
let visited = new Array(pcNum).fill(0); //방문 여부를 저장하는 배열

for (let i = 2; i < 2 + pairNum; i++) { //graph의 i번 노드와 연결된 노드들을 배열 형태로 저장.
    let [v1, v2] = input[i].split(' ');
    PCs[v1 - 1].push(v2 - 1);
    PCs[v2 - 1].push(v1 - 1);
}

function checkConfirmed(v) {
    if (visited[v] == 1) {
        return; //만약 graph의 v인덱스를 검사한 상태라면 return
    }
    visited[v] = 1;
    answer += 1;
    PCs[v].forEach((vertex) => {
        if(visited[vertex] == 0) { //해당 인덱스가 검사되지 않았다면
            checkConfirmed(vertex); //검사
        } 
    });
}

checkConfirmed(0);

console.log(answer-1);
