// https://programmers.co.kr/learn/courses/30/lessons/12899 [124 나라의 숫자]

function solution(n) {
    var answer = '';

    while(n>=1){
        div = String(n%3)
        if(div == 0){
            answer += 4
        }
        answer += div
        console.log(answer)
        n = parseInt(n/3)
        console.log("n",n)
    }
    console.log(answer)
    return answer;
}

solution(15)