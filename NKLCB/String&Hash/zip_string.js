// 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
// 단 반복횟수가 1인 경우 생략합니다.
// ▣ 입력설명
// 매개변수 s에 길이 100을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// 압축된 문자열을 반환한다.
// ▣ 매개변수 형식 1
// KKHSSSSSSSE
// ▣ 반환값 형식 1
// K2HS7E

function solution(s) {
    let answer = "";
    s = s+" ";
    let cnt = 1;
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] == s[i+1]) { //만약 나와 내 뒤에 애가 같다면 개수를 세 줘야 한다.
            cnt += 1;
        }
        else { //다른 문자열을 만나면 전부 reset시키기.
            answer += s[i];
            if(cnt != 1) {
                answer += cnt;
            }
            cnt = 1;
        }
    } 
    return answer;
}

console.log(solution("KKHSSSSSSSE"));