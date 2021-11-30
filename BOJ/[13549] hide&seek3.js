//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

let checked = new Array(100001).fill(0);
let curr = Number(input[0]);
let loca = Number(input[1]);
let queue = [];

function BFS() {
    queue.push([curr, 0]);
    checked[curr] = 1;
    while (queue.length) {
        let [v, time] = queue.shift();
        if (v === loca) return time;
        for (let nv of [v * 2, v - 1, v + 1]) {
            if (nv >= 0 && nv <= 100000 && checked[nv] === 0) {
                checked[nv] = 1;
                if (nv === v * 2) queue.unshift([nv, time]);
                else queue.push([nv, time + 1]);
            }
        }
    }
}

if (curr === loca) console.log(0);
else console.log(BFS());