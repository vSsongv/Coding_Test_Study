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

function solution(s) {
    let strMap = new Map();
    let finalMap = new Map();
    let lastMap = new Map();
    let answer = [];

    for(let i = 0; i < s.length; i++) {
        tmpMap = new Map();
        for(let j = 0; j < s[i].length; j++) {
            if(tmpMap.has(s[i][j])) {
                tmpMap.set(s[i][j], tmpMap.get(s[i][j])+1) //이미 있으면 1씩 더해주기
            }
            else tmpMap.set(s[i][j], 1); //1로 일단 key, val로 초기화
        }
        if(finalMap.size != 0) { //final map있으면 final이랑만 보면 됨(두개에서 공통된 애들만 들어가있음)
            for(let [key,val] of tmpMap) {
                if(finalMap.has(key)) { // 공통된게 있으면 비교해서 더 작은 값 넣어야 함.
                    if(val > finalMap.get(key)) {
                        lastMap.set(key, finalMap.get(key));
                    }
                    else {
                        lastMap.set(key, val);
                    }
                }
            }
            console.log("f",finalMap);
            console.log("s",lastMap);
        }
        else if(strMap.size == 0) { 
            strMap = tmpMap; //아직 srtMap이 없으면 처음애로 setting
        }
        else { //str이 있으면 str이랑 비교해야함.
            for(let [key,val] of strMap) {
                if(tmpMap.has(key)) { // 공통된게 있으면 비교해서 더 작은 값 넣어야 함.
                    if(val > tmpMap.get(key)) {
                        finalMap.set(key, tmpMap.get(key));
                    }
                    else {
                        finalMap.set(key, val);
                    }
                }
            }
        }
    }
    for(let [key, val] of lastMap) {
        for(let v = 0; v < val; v++) answer.push(key);
    }
    return answer;
}

function solution(words){  
    let answer=[];
    let sH = new Map();
    for(let x of words[0]){
        sH.set(x, (sH.get(x) || 0) + 1);
    }
    for(let i=1; i<words.length; i++){
        let tmp=new Map();
        for(let x of words[i]){
            if(sH.get(x)){
                sH.set(x, sH.get(x)-1);
                tmp.set(x, (tmp.get(x) || 0) + 1);
            }
        }
        sH=tmp;
    }
    let str="";
    for(let [key, val] of sH){
        str+=key.repeat(val);
    }
    answer=str.split('');
    return answer;
  }

console.log(solution(["longlong", "longtong", "longbig"])); //["l", "o", "n", "g", "g"]
console.log(solution(["cool", "rock", "cook"])); //["c", "o"]
console.log(solution(["a", "aaa", "aaaaa"])); //["a"]
console.log(solution(["aabbss", "bbbss", "csc", "asb"])); //["s"]
console.log(solution(["abcde", "edcba", "cdeba", "debac", "acbed"])); //["a", "c", "b", "e", "d"]