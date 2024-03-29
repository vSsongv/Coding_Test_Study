// https://programmers.co.kr/learn/courses/30/lessons/84325 [직업군 추천]

function solution(table, languages, preference) {
    var answer = '';
    let career = {};
    let topScore = 0;
    for(let i = 0; i < 5; i++) {
        let score = 0;
        let temp = table[i].split(" ");
        if(answer == '') answer = temp[0];
        career[temp[0]] = [temp[5],temp[4],temp[3],temp[2],temp[1]]; //make career dict. key = career, val = languages with their score. and append in array.
        for(let l = 0; l < languages.length; l++) {
             if(career[temp[0]].includes(languages[l])) { //when target_language is in career.val
                score += (preference[l] * ((career[temp[0]].indexOf(languages[l])) + 1));  //get score with preference * language score for per career.
             }
        }
        if(topScore == 0) topScore = score;
        else if(topScore < score) {
            topScore = score; //Update topScore
            answer = temp[0]; //Update topCareer
        }
        else if(topScore == score) {
            answer = (answer < temp[0]) ? answer : temp[0]; //Update topCareer
        }
    }
    return answer;
}