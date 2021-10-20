// 공통문자찾기
// N개의 문자열이 주어지면 모든 문자열에 공통으로 들어있는 문자를 찾아 출력하는 프로그램 을작성하세요.
// 만약 어떤 문자가 모든 문자열에서 2번 나타난다면 답에서도 2번 나타나게 해야합니다.
// ▣ 입력설명
// 매개변수 words에 N(2<=N<=100)개의 문자열이 주어집니다. 모든 문자열은 소문자로 이루어져 있습니다.
// ▣ 출력설명
// 모든 문자열에 들어있는 모든 문자를 문자배열형태로 반환합니다. 문자의 순서는 상관없습니다. 반드시 공통문자는 존재합니다.
// ▣ 입력예제 1
// ["steasue", "sasseysu", "kseseas"]
// ▣ 출력예제 1
// ["s", "s", "e", "a"]
// ▣ 입력예제 2
// ["ackky", "kabck", "yokkcs"]
// ▣ 출력예제 2
// ["k", "k", "c"]
// ▣ 입력예제 3
// ["longlong", "longtong", "longbig"]
// ▣ 출력예제 3
// ["l", "o", "n", "g", "g"]

function solution(words) {
    let answer = [];
    let sH = new Map();
    for (let x of words[0]) {
        sH.set(x, (sH.get(x) || 0) + 1); //첫번째 문자열에 대해 문자마다 등장횟수 map에 저장.
    }
    for (let i = 1; i < words.length; i++) {
        //words 배열의 길이만큼 돌면서
        let tmp = new Map(); //hash를 만들고
        for (let x of words[i]) {
            if (sH.get(x)) { //만약 해당 문자가 hash에 있으면
                sH.set(x, sH.get(x) - 1); //하나씩 매칭시켰으니 map에서 삭제해주기.
                tmp.set(x, (tmp.get(x) || 0) + 1); //tmp에 넣기
            }
        }
        sH = tmp; //다음 문자열 비교를 위해 map 갱신
    }
    let str = "";
    for (let [key, val] of sH) {
        str += key.repeat(val);
    }
    answer = str.split("");
    return answer;
}

console.log(solution(["longtong", "longbig", "longlong"])); //["l", "o", "n", "g", "g"]
console.log(solution(["rock", "cool", "cook"])); //["c", "o"]
console.log(solution(["a", "aaa", "aaaaa"])); //["a"]
console.log(solution(["aabbss", "bbbss", "csc", "asb"])); //["s"]
console.log(solution(["abcde", "edcba", "cdeba", "debac", "acbed"])); //["a", "c", "b", "e", "d"]
