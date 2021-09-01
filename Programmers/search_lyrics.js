// https://programmers.co.kr/learn/courses/30/lessons/60060 [가사 검색]

function solution(words, queries) {
    var answer = [];
    
    for(let i = 0; i < queries.length; i++) {
        let flag = 0;
        let cnt = 0;
        let len = queries[i].length
        if(queries[i][0] == '?') { //need to handle when all is ?
            flag = 1;
            
        }
        else {
            queries[i] = queries[i].slice(0,queries[i].indexOf('?'));
        }
        let findKey = queries[i]
            for(let j = 0; j < words.length; j++) {
                console.log(findKey);
                if(len != words[j].length) continue;
                else if(flag == 0){ //길이 달라도 include할수 있어서 else if로.
                    if(words[j].includes(findKey)) cnt++;
                    console.log(cnt)
                }
//                 else{
                    
//                 }
        }
        answer.push(cnt);
    }
    return answer;
}