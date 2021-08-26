// https://programmers.co.kr/learn/courses/30/lessons/84325 [직업군 추천]

function solution(table, languages, preference) {
    var answer = '';
    let career = {};
    for(let i = 0; i < 5; i++) {
        let temp = table[i].split(" ");
        career[temp[0]] = [temp[5],temp[4],temp[3],temp[2],temp[1]];
    }
    console.log(career);
    return answer;
}