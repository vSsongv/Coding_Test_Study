// https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript [다트 게임]

function solution(dartResult) {
    var score = 0;
    let point = 0;
    let curPoint = 0;
    let stackPoint = [];
    
    for(let s = 0; s < dartResult.length; s++) {
        if(dartResult[s] == '1' && dartResult[s+1] == '0') { s++; point = 10; }
        else {
            switch (dartResult[s]) {
                case 'S':
                    score += point;
                    stackPoint.push(point);
                    break;
                case 'D':
                    score += point * point;
                    stackPoint.push(point* point);
                    break;
                case 'T':
                    score += point * point * point;
                    stackPoint.push(point * point * point);
                    break;
                case '*':
                    if(stackPoint.length == 1) {
                        score += stackPoint[0];
                        stackPoint[0] = stackPoint[0] * 2;
                    }
                    else {
                        score += stackPoint[stackPoint.length-1];
                        score += stackPoint[stackPoint.length-2];
                        
                        stackPoint[stackPoint.length-1] = stackPoint[stackPoint.length-1] * 2;
                        stackPoint[stackPoint.length-2] = stackPoint[stackPoint.length-2] * 2;      
                    }
                    break;
                case '#':
                    score += stackPoint[stackPoint.length-1] * -2;
                    stackPoint[stackPoint.length-1] = stackPoint[stackPoint.length-1] * -1;
                    break;
                default:
                    point = Number(dartResult[s]);
            }
        }
    }
    return score;
}