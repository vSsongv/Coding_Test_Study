// 연속된 문자 지우기(Stack)
// 문자열 s가 주어지면 이웃한 두 개이 문자가 같으면 두 문자를 제거합니다. 
// 이 과정을 반복해서 최종적으로 남는 문자만으로 이루어진 문자열을 출력하는 프로그램을 작성하세요.
// 만약 "acbbcaa"라는 문자열이 주어진다면 최초 bb가 연속되어 있어 제거하고 나면 “accaa"가 되고, 
// 다시 cc가 연속되어 제거하면 ”aaa"가 되고 “aa"연속되어 제거하면 ”a"가 최종적으로 남습니다.
// ▣ 입력설명
// 매개변수 s에 문자열이 주어집니다. 문자열은 소문자로 이루어져 있으면 그 길이는 200,000을
// 넘지 않습니다.
// ▣ 출력설명
// 최종 문자열을 반환하세요.
// ▣ 매개변수 형식 1
// acbbcaa
// ▣ 반환값 형식 1
// a
// ▣ 매개변수 형식 2
// bacccaba
// ▣ 반환값 형식 2
// bacaba

function solution(s) {
    let stack = [];
    for(let a of s) {
        if(a === stack[stack.length-1]) { //지금 넣으려는 애가 stack의 맨 위에 있는 애랑 똑같으면(겹치면)
            stack.pop(); //제거해주기
        }
        else {
            stack.push(a);
        }
    }
    return stack.join('');
}

console.log(solution("acbbcaa"));
console.log(solution("bacccaba"));