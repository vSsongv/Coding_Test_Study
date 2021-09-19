// https://programmers.co.kr/learn/courses/30/lessons/42888 [오픈채팅방]

record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

function solution(record) {
    dict = {};
    var answer = [];
    for(let i = 0; i < record.length; i++) {
        if(record[i][0] != 'L') {
            let tmp = record[i].split(" "); 
            dict[tmp[1]] = tmp[2]; //id - name으로 매칭시킴. 어차피 맨 마지막 name이 그 id의 name이 됨.
        }
    }
    
    for(let i = 0; i < record.length; i++) {
        let msg = record[i].split(" "); 
        if(record[i][0] == 'E') {
            answer.push(dict[msg[1]] + '님이 들어왔습니다.');
        }
        else if(record[i][0] == 'L') {
            answer.push(dict[msg[1]] + '님이 나갔습니다.');
        }
    }
    return answer;
}

console.log(solution(record));
