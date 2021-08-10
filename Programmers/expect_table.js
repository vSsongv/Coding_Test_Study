// https://programmers.co.kr/learn/courses/30/lessons/12985 [예상 대진표]

function solution(n,a,b)
{
    var answer = 1;
    
    while(Math.ceil(a/2) !=  Math.ceil(b/2)) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    
    return answer;
}