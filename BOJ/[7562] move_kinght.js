// https://www.acmicpc.net/problem/7562 [나이트의 이동]

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

let num = Number(input[0]);
let idx = 1;

function BFS(knight, target, size) {
    let L = 0;
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2]; // dx, dy는 나이트가 이동 가능한 좌표.
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];
    const visit = Array.from({ length: size }, () => Array(size).fill(0));
    let queue = [];
    queue.push(knight);
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const [x, y] = queue.shift();
            if (x === target[0] && y === target[1]) { // (x,y) 좌표 값이 target에 도달했으면 즉시 종료.
                return L;
            }
            for (let i = 0; i < 8; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && visit[nx][ny] === 0) {
                    visit[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
        L++;
    }
}

for (let i = 0; i < num; i++) { //num개 테스트 케이스를 순차적으로 테스트한다.
    const size = Number(input[idx++]);
    const knight = input[idx++].split(" ").map((v) => +v);
    const target = input[idx++].split(" ").map((v) => +v);
    console.log(BFS(knight, target, size));
}