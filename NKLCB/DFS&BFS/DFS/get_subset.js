// 부분집합 구하기(DFS)
// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 n에 자연수 N(1<=N<=10)이 주어집니다.
// ▣ 출력설명
// 부분집합의 각 경우를 배열로 반환합니다.
// 단 공집합은 반환하지 않습니다.
// ▣ 매개변수 형식 1
// 3
// ▣ 반환값 형식
// [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]

function solution(n) {
  let answer = [];
  let subset = [];
  function getSubset(e) {
    if (e === n + 1) {
      if (subset.length !== 0) answer.push(subset.slice());
    } else {
      subset.push(e);
      getSubset(e + 1);
      subset.pop();
      getSubset(e + 1);
    }
  }
  getSubset(1);
  return answer;
}

console.log(solution(3));
