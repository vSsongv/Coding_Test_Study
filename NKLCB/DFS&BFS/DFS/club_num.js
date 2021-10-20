// 동아리 개수
// 현수가 다니는 학교에는 동아리가 많이 있습니다. 
// 현수가 다니는 학교의 동아리의 개수를 구하는 프로그램을 작성하세요.
// 현수가 다니는 학교의 학생은 1번부터 N번까지 번호가 부여된 N명의 학생들로 되어 입력됩니다.
// 만약 1번 학생과 2번 학생이 같은 동아리 이면 (1, 2) 순서쌍으로 입력되며, 
// (2, 3)이 입력되면 1, 2, 3번 학생은 같은 동아리입니다.
// 모든 학생은 동아리를 가지고 있습니다.
// ▣ 입력설명
// 매개변수 n에 현수가 다니는 학교의 학생수 N(5<=N<=30,000)이 주어집니다.
// 매개변수 edges에 두 학생의 정보를 나타내는 순서쌍의 주어집니다.
// ▣ 출력설명
// 현수가 다니는 학교의 동아리 개수를 반환하세요.
// ▣ 매개변수 형식 1
// 7, [[1, 2], [2, 3], [1, 4], [1, 5]]
// ▣ 반환값 형식 1
// 3
// 출력설명 : (1, 2, 3, 4, 5), (6), (7) 3개의 동아리가 존재합니다.
// 즉 1번, 2번, 3번, 4번, 5번 학생이 같은 동아리 이고, 6번 혼자서 동아리, 7번 혼자서 동아리가 됩니다.

function solution(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array(n).fill(0));
    let checked = Array(n+1).fill(0);

    for(let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function DFS(v) {
        for(let nv of graph[v]) {
            if(checked[nv] === 0) {
                checked[nv] = 1;
                DFS(nv);
            }
        }
    }
    for(let i = 1; i <= n; i++) {
        if(checked[i] === 0) {
            answer += 1;
            checked[i] = 1;
            DFS(i);
        }
    }
    return answer;
}

console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]]));