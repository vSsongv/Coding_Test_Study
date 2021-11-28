// https://www.acmicpc.net/problem/12851 [숨바꼭질 2]

const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let checked = new Array(100001).fill(0);
let curr = Number(input[0]);
let loca = Number(input[1]);
let D = 100001;
let queue = [];
let way = new Array(100).fill(0);
let L = 1;

function BFS() {
    queue.push(curr); //queue에 현재 위치 push
    checked[curr] = 1; //확인한 경로이므로 checked배열에 check
    way[curr] = 1;
    while (queue.length) {
        if (D < L) break;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let v = queue.shift(); // 처음 값을 빼주고,
            for (let nv of [v - 1, v + 1, v * 2]) {
                if (nv === loca) D = L;
                if (nv >= 0 && nv < 100000) {
                    if (checked[nv] === 0) { //확인하지 않은 경로라면 탐색.
                        queue.push(nv);
                        checked[v] = 1;

                        way[nv] = way[v];
                    }
                    else if (nv == v + 1) {
                        way[nv] += way[v];
                    }
                }
            }
        }
        L += 1; //한 level을 다 돌았으면(3가지 경우 다 봤으면) 다음 level로 증가.
    }
    return D;
}

if (curr === loca) {
    console.log(0);
    console.log(1);
}
else {
    let answer = BFS();
    // console.log(answer[0]);
    // console.log(answer[1]);
    console.log(answer);
}