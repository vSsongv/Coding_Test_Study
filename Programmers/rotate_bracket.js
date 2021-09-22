//https://programmers.co.kr/learn/courses/30/lessons/76502# [괄호 회전하기]

let pair = { '(':')', '{':'}', '[':']' }
let check = []

function isVaild(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[0] == ')' || arr[0] == '}' || arr[0] == ']') return false
        if(arr[i] in pair) {
            check.push(pair[arr[i]]);
        }
        else if(arr[i] == check[check.length-1]) {
            check.pop();
        }
    }
    if(check.length != 0) return false
    return true;
}

function solution(s) {
    var answer = 0;
    const arr = s.split('')
    for(let j = 0; j < s.length; j++) {
        arr.push(arr.shift());
        if(isVaild(arr) == true) answer += 1;
    }
    return answer;
}