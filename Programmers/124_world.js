// https://programmers.co.kr/learn/courses/30/lessons/12899 [124 나라의 숫자]

function solution(n) {
    let answer = '';
    let mod = 0

    while(n>=1){
        mod = String(n%3);
        if(mod == 0){
            answer += 4;
            n = parseInt(n/3)-1;
        }
        else {
            answer += mod;
            n = parseInt(n/3);
        }
    }
    return answer.split("").reverse().join("");
}

solution(10)
