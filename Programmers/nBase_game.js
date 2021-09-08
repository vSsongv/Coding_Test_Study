//https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript [n진수 게임]

function solution(n, t, m, p) {
    var answer = '';
    let num = 0;
    let speaker = 1;
    let transNum = [];
    while(answer.length != t) {
        if(!transNum.length) {
            transNum = num.toString(n).split(''); //진법 변환
            num++;
        }
        let curNum = transNum.shift();
        if(speaker == p) { //when tube turn!
            answer += curNum.toUpperCase(); //add curNum
        }
        speaker++;
        if(speaker > m) speaker = 1; //update speakerNum
    }
    return answer;
}