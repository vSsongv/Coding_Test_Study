// https://programmers.co.kr/learn/courses/30/lessons/49189 [가장 먼 노드]

function solution(n, edges) {
  let nodes = new Array(n + 1).fill([]);

  edges.forEach((edge) => {
    let [start, end] = edge;
    nodes[start] = [...nodes[start], end];
    nodes[end] = [...nodes[end], start];
  });

  let dists = [1, 0];
  let checked = Array(n + 1).fill(0);
  checked[1] = 1;
  let queue = [1];

  while (queue.length) {
    let node = queue.shift();
    for (let i = 0; i < nodes[node].length; i++) {
      if (checked[nodes[node][i]] === 0) {
        queue.push(nodes[node][i]);
        checked[nodes[node][i]] = 1;
        dists[nodes[node][i]] = dists[node] + 1;
      }
    }
  }

  const farthest = Math.max(...dists);

  return dists.filter((dist) => dist === farthest).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ]),
);
