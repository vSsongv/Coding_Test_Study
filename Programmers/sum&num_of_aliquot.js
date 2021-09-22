//https://programmers.co.kr/learn/courses/30/lessons/77884?language=javascript [약수의 개수와 덧셈]

function get_cnt(n) {
    let cnt = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            cnt++; if (i * i < n) {
                cnt++;
            }
        }
    }
    return cnt;
}

function solution(left, right) {
    var answer = 0;
    for(left; left <= right; left++) {
        if(get_cnt(left) % 2 == 0) answer += left;
        else answer -= left;
    }
    return answer;
}