// https://programmers.co.kr/learn/courses/30/lessons/42889 [실패율]

function solution(N, stages) {
    let answer = [];
    let fail_rate = {}
    let userNum = stages.length;
    
    stages.sort(function(a, b)  { //JS는 숫자 소팅 주의!!!!
        return a - b;
    });
    
    for(let j = 1; j <= N; j++) {
        fail_rate[j] = 0; //make dict as stage number
    }
    
    while(userNum > 0) {
        let cnt = 1;
        let curStage = 0;
        for(let i = 0; i < userNum; i++) {
            if(stages[i] == stages[i+1]) cnt++;
            else { 
                curStage = stages[i]; 
                break; 
            }
        }
        if(curStage in fail_rate) {
            fail_rate[curStage] = cnt / userNum;
        }
        stages = stages.slice(cnt); //delete same stage people
        userNum = userNum - cnt; //update userNum;
    }
    
    let sortable = [];
    for(let rate in fail_rate) {
        sortable.push([rate, fail_rate[rate]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    sortable.forEach((stage) => {
       answer.push(Number(stage[0]));
    });
    
    return answer;
}