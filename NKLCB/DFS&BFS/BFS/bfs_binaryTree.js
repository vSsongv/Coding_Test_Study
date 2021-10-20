function solution() {
    let answer = "";
    function BFS() {
        let queue = [];
        queue.push(1);
        while (queue.length) {
            let v = queue.shift();
            answer += v + " ";
            for (let nv of [v * 2, v * 2 + 1]) {
                if (nv > 7) continue;
                queue.push(nv);
            }
        }
    }
    BFS();
    return answer;
}
console.log(solution());