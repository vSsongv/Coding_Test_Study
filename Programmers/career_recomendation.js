// https://programmers.co.kr/learn/courses/30/lessons/84325 [직업군 추천]

function solution(table, languages, preference) {
    var answer = '';
    let career = {};
    for (let i = 0; i < 5; i++) {
        let temp = table[i].split(" ");
        career[temp[0]] = [temp[5], temp[4], temp[3], temp[2], temp[1]]; //make career dict. key = career, val = languages with their score. and append in array.
    }

    let l = 0;
    for (let key in career) {
        let score = 0;
        let langs = career[key];
        if (langs.includes(target_lang)) {
            score += (target_pref * (langs.indexOf(target_lang) + 1));
        }

        console.log(score);

        while (l < 3) {
            let target_lang = languages[l]; //target languages
            let target_pref = preference[l]; //target score

            l++;
        }
    }
    return answer;
}