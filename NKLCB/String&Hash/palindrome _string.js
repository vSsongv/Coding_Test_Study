// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
// ▣ 입력설명
// 매개변수 s에 길이 100을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// 회문 문자열인지의 결과를 YES 또는 NO로 반환합니다.
// ▣ 매개변수 형식 1
// gooG
// ▣ 반환값 형식 1
// YES

function solution(s) {
    s = s.toUpperCase();
    if(s.split("").reverse().join("") === s) return "YES";
    else return "NO";
}

console.log(solution("Hamah"));