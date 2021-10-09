// https://programmers.co.kr/learn/courses/30/lessons/42578 [위장]

function solution(clothes) {
    var answer = 1;
    let clothMap = new Map();
    for(let i = 0; i < clothes.length; i++) clothMap.set(clothes[i][1], (clothMap.get(clothes[i][1]) || 0)+1);

    for(let[type, num] of clothMap) {
        answer *= (num+1); //개수+1 한 것만큼 곱한 뒤(조합)
    }
    return answer-1; //모두 안 고를 경우를 하나 빼 주면 됨!
}