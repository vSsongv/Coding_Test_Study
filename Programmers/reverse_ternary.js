//https://programmers.co.kr/learn/courses/30/lessons/68935 [3진법 뒤집기]

function solution(n) {
    let three = n.toString(3);
    three = three.split("").reverse().join("");
    return Number.parseInt(three, 3);
}