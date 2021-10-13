// 괄호문자제거(Stack)
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 s에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 남은 문자만 반환 한다.
// ▣ 매개변수 형식 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 반환값 형식 1
// EFLM

function solution(s) {
    let answer = "";
    let cnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            cnt += 1; //cnt를 더해주고
        }
        else if(s[i] === ")") {
            cnt -= 1;
        }
        if(cnt === 0) { //괄호 밖에 있음
            if(s[i] != "(" && s[i] != ")") answer += s[i];
        }
    }
    return answer;
}

function solution(s) {
    let stack = [];
    for(let x of s) {
        if(x === ')') {
            while(stack.pop() !== '(');
        }
        else stack.push(x);
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
console.log(solution("A(D)E(F(G(H))K)LM(N)"));