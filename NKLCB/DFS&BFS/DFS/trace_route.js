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
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let checked = Array(n + 1).fill(0);

    let path = [];
    for (let [a, b] of edges) {
        graph[a][b] = 1;
    }
    function DFS(v) {
        if (v === n) {
            answer += 1;
        }
        else {
            for (let i = 0; i <= n; i++) {
                if (graph[v][i] === 1 && checked[i] === 0) {
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
function solution2(n, array) {

    let answer = 0;

    let len = array.length;

    let check = Array(len + 1).fill(0); // 정점을 방문했는지 판단하는 배열

    let board = Array(len + 1); // 인접행렬 그래프 생성

    for (let i = 0; i < len; i++) {
        board[i] = Array(len + 1);
    }

    for (let [a, b] of array) {
        board[a].push(b); // a행에 b을 push  이렇게 하면 인접 리스트 생성 
    }

    function DFS(v) {

        if (v === n) { //입력 받은 정점의 수와 level이 같다면 카운트
            answer++;
        }
        else {
            for (let i = 0; i < board[v].length; i++) { // 
                if (check[board[v][i]] === 0) { //v 정점의 번호가 check가 되어있는지 아닌지만 확인한다 
                    check[board[v][i]] = 1; // 넘겨받은 정점 번호의 사용여부 체크 
                    DFS(board[v][i]); // DFS 로도 이제 리스트에 있는 값을 넘긴다 
                    check[board[v][i]] = 0;
                }
            }
        }
    }

    check[1] = 1 // 처음에 DFS가 1로 시작하기 때문에 방문 체크 1을 해줘야한다. 
    DFS(1);

    return answer;
}
console.log(solution1(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));
console.log(solution2(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));
