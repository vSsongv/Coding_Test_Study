// bfs이용.
// 위상정렬(그래프 정렬)
// 위상정렬은 어떤 일을 하는 순서를 찾는 알고리즘입니다.
// 각각의 일의 선후관계가 복잡하게 얽혀있을 때 각각 일의 선후관계를 유지하면서 전체 일의
// 순서를 짜는 알고리즘입니다.
// 만약 아래와 같은 일의 순서를 각각 지키면서 전체 일의 순서를 정한다면
// 1 4 / /1번일을 하고 난 후 4번일을 해야한다.
// 5 4
// 4 3
// 2 5
// 2 3
// 6 2
// 전체 일의 순서는 1, 6, 2, 5, 4, 3과 같이 정할 수 있다.전체 일의 순서는 여러 가지가 있습
// 니다 그 중에 하나입니다.
// ▣ 입력설명
// 첫 번째 줄에 전체 일의 개수 N과 일의 순서 정보의 개수 M이 주어집니다.
// 두 번째 줄부터 M개의 정보가 주어집니다.
// ▣ 출력설명
// 전체 일의 순서를 출력합니다.
// ▣ 입력예제 1
// 6 6
// 1 4
// 5 4
// 4 3
// 2 5
// 2 3
// 6 2
// ▣ 출력예제 1
// 1 6 2 5 4 3

function solution(n, arr) {
    let answer = [];
    let graph = Array.from(Array(n + 1), () => Array());
    let indegrees = Array(n + 1).fill(0);

    for (let [from, to] of arr) {
        graph[from].push(to); //시작점 index에 끝 점 index를 저장.
        indegrees[to] += 1; //끝 점이 몇 개의 entry를 가지고 있는지 저장.
    }

    let queue = [];
    for (let i = 1; i < n + 1; i++) {
        if (indegrees[i] === 0) queue.push(i); //들어오는 entry가 없는 애부터 시작. 걔네부터 바로 시작할 수 있기 때문.
    }

    while (queue.length) {
        let curr = queue.shift(); //시작해야되는 애를 꺼내고, 
        answer.push(curr);
        for (let next of graph[curr]) { //다음에 해야 될 애들을 꺼내서,
            indegrees[next]--; //entry 하나 감소
            if (indegrees[next] === 0) queue.push(next); //entry가 하나 없어졌으니 해당 점부터 시작할 수 있는 상태가 됨.
            console.log(queue)
        }
    }
    return answer;
}

console.log(solution(6, [[1, 4], [5, 4], [4, 3], [2, 5], [2, 3], [6, 2]]));