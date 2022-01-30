// https://www.acmicpc.net/problem/7785 [회사에 남아 있는 사람]

const input = require('fs')
    .readFileSync(
        process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
    )
    .toString()
    .trim()
    .split('\n');

const workers = input.slice(1);
let leftWorkers = new Map();

workers.forEach((worker) => {
    const [name, status] = worker.split(' ');
    if(status.trim() === 'leave') leftWorkers.delete(name);
    else leftWorkers.set(name, 'working');
});

console.log([...leftWorkers.keys()].sort().reverse().join('\n'));
