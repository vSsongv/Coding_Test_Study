// 압축된 결과의 문자열이 주어지면 다시 원 상태로 압축을 해제하여 출력하는 프로그램을 작성하세요.
// 압축된 결과가 3(ab) 라고 주어지면 괄호안에 문자열이 3번 반복된 것을 압축했다는 의미입니다. 이걸 원상태로 해제한 것은 “ababab”입니다.
// 만약 2(ab)k3(bc) 를 압축해제 하면 "ababkbcbcbc"입니다. 2(ab)k3(bc)에서 k문자열과 같이 반복횟수가 1인 경우는 숫자를 생략하고 압축되어 있습니다. 
// 또한 겹쳐서 압축된 2(a2(b))을 압축해제하는 과정은 2(a2(b))-->2(abb)-->abbabb로 2(a2(b))를 압축해제한 결과는 abbabb입니다.
// ▣ 입력설명
// 매개변수 s에 압축된 결과가 주어집니다. 괄호안의 문자열의 반복횟수는 30을 넘지 않습니다.
// 압축을 해제했을 경우 총 길이는 1000을 넘지 않도록 입력이 주어집니다.
// 문자는 소문자로만 주어집니다.
// ▣ 출력설명
// 압축을 해제한 결과를 반환합니다.
// ▣ 매개변수 형식 1
// 2(ab)k3(bc)
// ▣ 반환값 1
// ababkbcbcbc
// ▣ 매개변수 형식 2
// 3(a2(b))ef
// ▣ 반환값 2
// abbabbabbef

// function decodeString(str) {
//     while (str.match(/\d/gi)) { // 숫자가 매핑될 때까지 반복, 아직 디코딩이 끝나지 않음을 뜻함
//         str = str.replace(/\d+\([a-z]+\)/gi, (matched) => { // 정규표현식으로 매칭된 문자열을 첫번째 인자로 사용할 수 있다.
//             const repeatNumber = Number(matched.match(/\d+/gi)[0]); // number 매칭
//             const internalStr = matched.match(/[a-z]+/gi); // a to z characters 매칭
//             return internalStr[0].repeat(repeatNumber); // 괄호 안에 담긴 문자열을 반복해서 return 하면 매칭된 문자열이 변환된다.
//         });
//     }
//     return str;
// }

function decodeString(str) {
    let stack = [];
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        let tmp = ""
        let repeatNum = "";
        if (str[i] === ")") {
            while (stack[stack.length - 1] !== "(") {
                tmp = stack.pop() + tmp; // ( 나올때까지 pop
            }
            stack.pop(); //( 빼주고 
            while (String(stack[stack.length - 1]).match(/\d/gi)) { //숫자만
                repeatNum = stack.pop() + repeatNum;
                console.log(repeatNum);
            }
            repeatNum = Number(repeatNum);
            stack.push(tmp.repeat(repeatNum)); //반복시켜서 다시 push
            continue; // )만난거니까 push 넘기고 돌려야됨
        }
        stack.push(str[i])
    }
    while (stack.length !== 0) {
        answer = stack.pop() + answer;
    }
    return answer;
}


// console.log(decodeString("2(ab3(ef))"));
// console.log(decodeString("3(a)2(bc)"));
console.log(decodeString("100(leetcode)"));