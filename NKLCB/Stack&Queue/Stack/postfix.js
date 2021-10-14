// 후위식 연산(postfix)(Stack)
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
// ▣ 입력설명
// 매개변수 s에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않은 문자열입니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
// ▣ 출력설명
// 연산한 결과를 반환합니다.
// ▣ 매개변수 형식 1
// 352+*9-
// ▣ 반환값 형식 1
// 12

function solution(s) {
    let signs = ["+","-","*","/"];
    let stack = [];
    for(let n of s) {
        if(signs.includes(n)) {
            let n1 = Number(stack.pop());
            let n2 = Number(stack.pop());
            switch(n) {
                case "+":
                   stack.push(n2+n1);
                   break;
                case "-":
                    stack.push(n2-n1);
                    break;
                case "*":
                    stack.push(n2*n1);
                    break;
                case "/":
                    stack.push(n2/n1);
                    break;
           }
        }
        else stack.push(n);
    }
    return stack.pop();
}

console.log(solution("352+*9-"));