// https://programmers.co.kr/learn/courses/30/lessons/42884 [단속카메라]

function solution(routes) {
    routes.sort((a,b) => a[1]-b[1]);
    
    let setLoca = routes[0][1]; //먼저 제일 처음 끝나는 지점에 카메라 설치
    let answer = 1;
    
    for(let i = 1; i < routes.length; i++) {
        if(routes[i][0] > setLoca) { //다음 차량이 진입한 시점이 현재 카메라가 위치한 지점보다 뒤라면 카메라를 설치해야함.
            answer += 1;
            setLoca = routes[i][1];
        }
    }
    
    return answer;
}