// 재귀함수를 이용한 이진수 출력(DFS)
// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 
// 단 재귀함수를 이용해서 출력해야 합니다.
// ▣ 입력설명
// 매개변수 n에 10진수 N(1<=N<=1,000)이 주어집니다.
// ▣ 출력설명
// n의 이진수를 반환하세요.
// ▣ 매개변수 형식
// 11
// ▣ 반환값 형식
// 1011

function getBinary(n) {
    if(n === 1 || n === 0) return String(n);
    return getBinary(Math.floor(n/2)) + String(n%2);
}

console.log(getBinary(11));
console.log(getBinary(10));