// 최소편집
// 문자열 A와 문자열 B가 주어져 있을 때, 문자열 A를 문자열 B로 편집(삽입, 삭제, 대체)하여 바꾸려 한다.
// 이때 편집하는 최소 횟수를 구하는 프로그램을 작성하세요.
// 만약 문자열 A가 aabab이고 문자열 B가 babb라면 2회의 편집으로 바꿀 수 있다. 
// 문자열 aabab에서 제일 앞에 있는 a를 b로 대체하면 babab이고 네 번째 a를 삭제하면 된다.
// ▣ 입력설명
// 매개변수 s1에 첫 번째 문자열이 주어지고, 매개변수 s2에 두 번째 문자열이 주어집니다.
// 두 문자열의 길이는 1000을 넘지 않으며 대문자로 주어진다.
// ▣ 출력설명
// 최소 편집 횟수를 반환합니다.
// ▣ 매개변수 형식 1
// BAOBAB
// BACBA
// ▣ 반환값 형식 1
// 2

function solution(s1, s2) {
    let answer = 0;
    let len1 = s1.length;
    let len2 = s2.length;
    let dy = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) dy[i][0] = i; //가로줄 index로 채워주고
    for (let i = 1; i <= len2; i++) dy[0][i] = i; //세로줄 index로 채워두기.
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) dy[i][j] = dy[i - 1][j - 1]; //편집 필요 없음
            else { //위, 왼쪽, 대각선 값 중에 최소 값으로 setting. 왼쪽+1(삽입), 위쪽+1(삭제)
                dy[i][j] = Math.min(dy[i - 1][j], dy[i][j - 1], dy[i - 1][j - 1]) + 1; //dy[i][j]는 i까지의 문자열을 j문자열로 바꾸는 데 필요한 최소 편집 횟수
            }
        }
    }
    answer = dy[len1][len2]
    return answer;
}

console.log(solution("BAOBAB", "BACBA"));