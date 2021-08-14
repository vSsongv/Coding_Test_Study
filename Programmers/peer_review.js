// https://programmers.co.kr/learn/courses/30/lessons/83201 [상호 평가]

function grade(avg) {
    if(avg >= 90) return 'A';
    else if(avg >= 80 && avg < 90) return 'B';
    else if(avg >= 70 && avg < 80) return 'C';
    else if(avg >= 50 && avg < 70) return 'D';
    else if(avg < 50) return 'F';
}

function solution(scores) {
    var answer = '';
    let myScore = 0;
    let avg = [];
    for(let i = 0; i < scores.length; i++) {
        let score = [];
        let myScore = 0;
        for(let j = 0; j < scores.length; j++) {
            if(i == j) {
               myScore = scores[j][i]; //자기가 준 점수
            }
            score.push(scores[j][i]); //자기가 받은 점수들 push.
            score = score.sort(function(a, b) { return a - b; }); //오름차순으로 정렬해줌
        }
            let max = Math.max.apply(null, score); //최대값
            let min = Math.min.apply(null, score); //최소값
        
            let count = score.reduce((cnt, element) => cnt + (myScore === element), 0); //내가 준 점수랑 똑같은 점수 개수
        
        if(count == 1) { //자기가 준 점수가 유일한 경우
            if(myScore == max) score.pop(); //최대면 맨 뒤에거(최대값) pop  
            if(myScore == min) score.shift(); //최소면 맨 앞에거(최소값) shift
        }
        const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
        answer = answer + grade(average(score));
    }
    return answer;
}