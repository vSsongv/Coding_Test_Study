// 조합 구하기
// 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 n에 자연수 N(3<=N<=10)과 매개변수 m에 M(2<=M<=N) 이 주어집니다.
// ▣ 출력설명
// 조합의 결과를 배열형태로 반환하세요.
// ▣ 매개변수 형식 1
// 4 2
// ▣ 반환값 형식 1
// [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

function combination(n, m) {
    let answer = [];
    let tmp = [];
    function combi(l, s) {
        if(l === m) {
            answer.push(tmp.slice());
        } 
        else {
            for(let i = s; i <= n; i++) {
                tmp.push(i);
                combi(l+1, i+1);
                tmp.pop();
            }
        }
    }
    combi(0, 1);
    return answer;
}

console.log(combination(8, 4));