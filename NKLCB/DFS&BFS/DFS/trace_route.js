// 경로 탐색
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요. 
// 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
// 1 2 3 4 5
// 1 2 5
// 1 3 4 2 5
// 1 3 4 5
// 1 4 2 5
// 1 4 5
// 총 6 가지입니다.
// ▣ 입력설명
// 매개변수 n에 정점의 수 N(1<=N<=20)주어집니다. 이차원 배열 edges에 간선의 정보가 주어
// 집니다.
// ▣ 출력설명
// 총 가지수를 반환합니다.
// ▣ 매개변수 형식 1
// 5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]
// ▣ 반환값 형식 1
// 6
// 입력설명 : [a, b]는 a정점에서 b정점으로 이동할 수 있다는 의미입니다.

// 인접행렬 이용
function solution1(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let checked = Array(n+1).fill(0);

    let path = [];
    for(let [a,b] of edges) {
        graph[a][b] = 1;
    }
    function DFS(v) {
        if(v === n) {
            answer += 1;
        }
        else{
            for(let i = 0; i <= n; i++) {
                if(graph[v][i] === 1 && checked[i] === 0) {
                    checked[i] = 1;
                    path.push(i);
                    DFS(i);
                    checked[i] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    checked[1] = 1;
    DFS(1);
    return answer;
}

// 인접리스트 이용
function solution2(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let checked = Array(n+1).fill(0);

    let path = [];
    for(let [a,b] of edges) {
        graph[a][b] = 1;
    }
    console.log(graph);
    function DFS(v) {
        if(v === n) {
            answer += 1;
        }
        else{
            for(let i = 0; i <= n; i++) {
                if(graph[v][i] === 1 && checked[i] === 0) {
                    checked[i] = 1;
                    path.push(i);
                    DFS(i);
                    checked[i] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    checked[1] = 1;
    DFS(1);
    return answer;
}

console.log(solution1(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));
console.log(solution2(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));
