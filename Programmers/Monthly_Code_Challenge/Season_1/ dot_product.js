//https://programmers.co.kr/learn/courses/30/lessons/70128 [내적]

function solution(a, b) {
    var answer = 0;
    for(let i = 0; i < a.length; i++) {
        answer += a[i]*b[i];
    }
    return answer;
}