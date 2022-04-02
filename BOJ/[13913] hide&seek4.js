const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let checked = new Array(100001).fill(0);
const path = new Array(100001).fill(0);;
let curr = Number(input[0]);
let loca = Number(input[1]);
let queue = [];
let L = 0;

function BFS() {
    queue.push([curr, 0]);
    checked[curr] = 1;
    while (queue.length) {
        let [v, time] = queue.shift();
        if (v === loca) return time;
        for (let nv of [v * 2, v - 1, v + 1]) {
            if (nv >= 0 && nv <= 100000 && checked[nv] === 0) {
                path[nv] = v;
                checked[nv] = 1;
                queue.push([nv, time + 1]);
            }
        }
    }
}

if (curr === loca) console.log(0);
else {
    const time = BFS();
    const order = [];
    order.push(loca);
    let prev = path[loca];
    for (let i = 0; i < time; i++) {
        console.log(order);
        prev = path[prev];
    }
    const result = `${time}\n${order.reverse().join(" ")}`;
    console.log(result);
}