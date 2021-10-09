// https://programmers.co.kr/learn/courses/30/lessons/42586 [기능개발]

function solution(progresses, speeds){
    var answer = [];
    let day = [];
    let cnt = 1;

    for(let i = 0; i < progresses.length; i++){
        day[i] =  Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    let max = day[0];

    for(let i = 1; i < progresses.length; i++){
        if(max >= day[i]){ //현재 day가 그 다음 day보다 크면 지금게 끝나야 다음것도 배포 가능, 같으면 한번에 배포 가능
            cnt++;
        }
        else{ //현재보다 다음 day가 크면 일단 나부터 배포해야함.
            answer.push(cnt);
            cnt = 1;
            max = day[i];
        }
    }
    answer.push(cnt);
    return answer;
}

//짧은 버전. 참고하자
function solution(progresses, speeds){
    var answer = [];
    let beforCommitDay = 0;

    progresses.map((done,i) => {
        let day = Math.ceil((100 - done) / speeds[i]);
        if(day > beforCommitDay) {
            answer.push(1);
            beforCommitDay = day;
        }
        else{
            answer[answer.length-1]++;
        }
    })
    console.log(answer);
    return answer;
}

solution([2,2,1,2], [1,1,1,1])
