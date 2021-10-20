// N개의 문자열이 주어지면 모든 문자열을 구분할 수 있는 최소길이 접두어를 찾는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 words에 N(2<=N<=100)개의 문자열이 주어집니다. 모든 문자열은 소문자로 이루어져 있습니다.
// ▣ 출력설명
// 모든 문자열을 구분할 수 있는 접두어의 최소길이를 반환합니다.
// ▣ 입력예제 1
// ["seeasue", "sesseysu", "semeas"]
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2
// ["ackky", "kabck", "yokkcs"]
// ▣ 출력예제 2
// 1
// ▣ 입력예제 3
// ["longlong", "longtong", "longbig"]
// ▣ 출력예제 3
// 5

function solution(s) {
    let flag = false;
    s.sort((a, b) => a.length - b.length); //제일 길이가 짧은 문자열을 기준으로 정렬하고
    for (let i = 1; i < s[0].length; i++) { //그 문자열을 한 글자씩 자르면서
        let target = s[0].substring(0, i);
        for (let j = 1; j < s.length; j++) {
            if (target != s[j].substring(0, i)) flag = true; //다른 문자열을 같은 길이로 자른 값들과 비교한다.
            else break; //비교 불가 대상이 있으면 반복문을 빠져나가서 다음 target으로 비교한다.
        }
        if (flag == true) return i; //전부 다 돌았는데 true면 지금 자른 개수로 비교 가능.
    }

}

// set으로 풀이한 방법
function solution(s) {
    for (let i = 1; i < s[0].length; i++) { //그 문자열을 한 글자씩 자르면서
        let strSet = new Set();
        for (let j = 0; j < s.length; j++) {
            strSet.add(s[j].substring(0, i)); //set에 넣는다.
        }
        if (strSet.size == s.length) return i; //만약 set의 원소 개수가 s의 개수와 같다면 비교 가능한 상태이다.
    }
    return
}

console.log(solution(["seeasue", "sasseysu", "semeas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));
