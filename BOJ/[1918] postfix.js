// https://www.acmicpc.net/problem/1918 [후위 표기식]

const { PassThrough } = require('stream');

const input = require('fs').readFileSync('input.txt').toString().trim();

let answer = "";
let calStack = [];

for (let e of input) {
    if (e.match(/[A-Z]/)) answer += e;
    else if (e === "(") calStack.push(e); //열린 괄호 일단 넣고
    else if (e === ")") { //닫힌 괄호 만나면 열린 괄호 만날 때까지 answer에 더해주고 열린 괄호 pop
        while (calStack.length && calStack[calStack.length - 1] !== "(") answer += calStack.pop();
        calStack.pop();
    }
    else if (e == "+" || e == "-") { //덧셈이나 뺄셈이면 stack의 top을 다 빼도 된다.
        while (calStack.length && calStack[calStack.length - 1] !== "(") answer += calStack.pop();
        calStack.push(e);
    }
    else if (e == "*" || e == "/") { //곱셈이나 나눗셈아면 top이 +,-인 경우 뺄 수 없다. (곱셈/나눗셈이 우선순위가 높기 때문)
        while (calStack.length && (calStack[calStack.length - 1] == "*" || calStack[calStack.length - 1] == "/")) answer += calStack.pop();
        calStack.push(e);
    }
}

while (calStack.length) answer += calStack.pop(); //남아있는 연산자가 있을 수도 있으니 모두 pop.

console.log(answer);