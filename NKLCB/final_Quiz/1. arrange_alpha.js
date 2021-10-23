// 한 개의 문자열 s가 주어지면 문자열의 각 문자의 빈도수를 계산하여 빈도수가 가장 큰 문자부터 내림차순으로 재정렬한 문자열을 출력하는 프로그램을 작성하세요. 
// 단 대소문자를 구분합니다.
// ▣ 입력설명
// 매개변수 s에 길기가 10,000을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// 빈도수를 기준으로 내림차순한 문자열을 반환합니다. 
//만약 빈도수가 같은 문자가 존재하면 대문자가 소문자보다 우선하게 하고, 대문자끼리는 알파벳순으로 합니다.(소문자도 마찬가지입니다.) 
//다른 말로 표현하면 빈도수가 같을 경우 아스키번호 순으로 오름차순하라는 말입니다. 아스키번호 : 대문자 65~90, 소문자 97~122
// ▣ 매개변수 형식 1
// aaAAcccbbbBB
// ▣ 반환값 1
// bbbcccAABBaa
// ▣ 매개변수 형식 2
// kdkDKKGkdkgks
// ▣ 반환값 2
// kkkkkKKddDGgs

function solution(s) {
    let answer = '';
    let strMap = new Map();
    for (let i = 0; i < s.length; i++) {
        strMap.set(s[i], (strMap.get(s[i]) || 0) + 1);
    }
    let arr = [...strMap].sort(function (a, b) {
        return (a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0) || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    });
    for (let j = 0; j < arr.length; j++) {
        answer += arr[j][0].repeat(arr[j][1]);
    }
    return answer;
}

console.log(solution("aaAAcccbbbBB"));
console.log(solution("kdkDKKGkdkgks"));