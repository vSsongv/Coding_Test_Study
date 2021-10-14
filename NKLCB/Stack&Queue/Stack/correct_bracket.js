// 올바른 괄호(Stack)
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// ▣ 입력설명
// 매개변수 s에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
// ▣ 출력설명
// YES, NO를 반환 한다.
// ▣ 매개변수 형식 1
// (()(()))(()
// ▣ 반환값 형식 1
// NO

function solution(s) {
    let check = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") check.push(s[i]);
        else if(check[check.length-1] == "(") {
            check.pop();
        }
        else check.push(s[i]);
        console.log(check);
    }
    if(check.length != 0) return "NO";
    else return "YES";
}

console.log(solution("(()(()))(()"));
console.log(solution("(())()"));
console.log(solution("(()()))"));