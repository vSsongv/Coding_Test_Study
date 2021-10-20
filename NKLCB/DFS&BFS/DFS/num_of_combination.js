// 조합의 경우수(메모이제이션)
// 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 n에 N(3<=N<=33)과 매개변수 r에 R(0<=R<=n)이 입력됩니다.
// ▣ 출력설명
// 조합수를 반환합니다.
// ▣ 매개변수 형식 1
// 5 3
// ▣ 반환값 형식 1
// 10
// ▣ 매개변수 형식 2
// 33 19
// ▣ 반환값 형식 2
// 818809200

function solution(n, r) {
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    let answer = [];
    function getCombi(n, r) {
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r || r === 0) return 1;
        else return dy[n][r] = getCombi(n-1, r-1) + getCombi(n-1, r);
    }
    answer = getCombi(n, r);
    return answer;
}

console.log(solution(5, 3));
