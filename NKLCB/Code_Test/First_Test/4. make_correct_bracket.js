// 올바르지 않은 괄호문자열이 주어지면, 최소횟수로 괄호를 제거하여 올바른 괄호문자열로 만드는 프로그램을 작성하세요. 
// 괄호를 최소로 제거했을 때 나올 수 있는 모든 올바른 괄호문자열의 경우수를 출력합니다.
// ▣ 입력설명
// 길이가 40을 넘지 않는 올바르지 않은 괄호문자열이 매개변수 s에 주어집니다.
// ▣ 출력설명
// 최소횟수로 괄호를 지웠을 때 나올 수 있는 모든 올바른 괄호문자열의 경우수를 반환합니다.
// ▣ 매개변수 형식
// "()(()()"
// ▣ 반환값 형식
// 2
// 출력설명 : “()(()()”를 괄호 하나만 지우는 경우에 2종류의 올바른 괄호문자열을 만들 수 있습니다.
// “()(()()”에서 세번째 (를 지우면 “()()()”와 같은 올바른 괄호문자열을 만들 수 있고, “()(()()”에서 여섯번째 (를 지우면 “()(())”와 같은 올바른 괄호문자열을 만들 수 있습니다.

function solution(s) {
    let answer;
    let Q = new Set([s]);
    while (Q.size) {
        const next = new Set();
        for (let x of Q) {
            if (isValid(x)) {
                let answer = [...Q].filter(isValid);
                return answer[0] === "" ? 0 : answer.length;
            }
            for (let i = 0; i < x.length; i++) {
                next.add(x.slice(0, i) + x.slice(i + 1));
            }
        }
        Q = next;
    }
    return answer;
}
function isValid(str) {
    let cnt = 0;
    for (let ch of str) {
        if (ch === '(') cnt++;
        else if (ch === ')') cnt--;
        if (cnt < 0) return false;
    }
    return cnt === 0;
}
console.log(solution(")("));

console.log(solution("()(()()")); //2