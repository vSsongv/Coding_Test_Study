// https://programmers.co.kr/learn/courses/30/lessons/81301 [숫자 문자열과 영단어]

function solution(s) {
    var answer = 0;
    s = s.replace(/one/g,'1');
    s = s.replace(/two/g,'2');
    s = s.replace(/three/g,'3');
    s = s.replace(/four/g,'4');
    s = s.replace(/five/g,'5');
    s = s.replace(/six/g,'6');
    s = s.replace(/seven/g,'7');
    s = s.replace(/eight/g,'8');
    s = s.replace(/nine/g,'9');
    s = s.replace(/zero/g,'0');
    s = Number(s);
    return answer;
}

// split, join ver
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}