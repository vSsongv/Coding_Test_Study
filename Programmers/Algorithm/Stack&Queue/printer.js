// https://programmers.co.kr/learn/courses/30/lessons/42587# [프린터]

function solution(priorities, location) {
    let answer = 0;
    let delayed = [];
    let certain = [];
    certain.push(priorities[0], 0)

    for (let i = 1; i < priorities.length; i++) {
        let cur = priorities[i];
        let top = certain[certain.length - 1];
        if (certain.length || top[0] >= cur) certain.push([cur, i]); //top이 나보다 크면 push.
        else {
            while (top[0] < cur && certain.length) { //top이 나보다 커질 때까지 delayed에 push.
                delayed.push(certain.pop());
                top = certain[certain.length - 1];
            }
            certain.push([cur, i]);
        }
    }
    while (delayed.length) certain.push(delayed.pop());
    return answer;
}

console.log("a", solution([2, 1, 3, 2], 2));
console.log("a", solution([3, 1, 2, 5, 7], 3));