//https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript [음양 더하기]

function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] == false) {
            answer += absolutes[i]*-1;
        }
        else answer += absolutes[i];
    }
    return answer;
}