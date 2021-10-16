// https://www.acmicpc.net/problem/1697 [숨바꼭질]

const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let queue = [];
let checked = new Array(10001).fill(0);
let curr = input[0];
let loca = input[1];
let len = queue.length;
let L = 0;

function BFS(curr, loca) {
    queue.push(curr); //queue에 현재 위치 push
    checked[curr] = 1; //확인한 경로이므로 checked배열에 check
    while(len) {
        for(let i = 0; i < len; i++) {
            let v = queue.shift(); // 처음 값을 빼주고,
            for(let nv of [curr - 1, curr + 1, curr * 2]) {
                if(nv === loca) { //다음으로 이동할 위치가 동생이 있는 위치라면 현재  level(이동한 초) 리턴
                    return L;
                }
                if(nv > 0 && nv <= 10000 && checked[nv] === 0) {//확인하지 않은 경로라면 탐색.
                    queue.push(nv);
                }
            }
        }
        L += 1; //한 level을 다 돌았으면(3가지 경우 다 봤으면) 다음 level로 증가.
    }
}

if(curr === loca) return 0;
BFS(curr, loca);
