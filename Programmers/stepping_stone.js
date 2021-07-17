// https://programmers.co.kr/learn/courses/30/lessons/43236 [징검다리]
function solution(distance, rocks, n) {
    let answer = 0;
    rocks=[0,...rocks.sort((a,b)=>a-b),distance];
    
    let min = 0;
    let max = rocks[rocks.length-1];
    
    while(min <= max) {
        let mid = Math.floor((max+min)/2); //중간값
        let now = 0;
        let removed = 0;

        for(let i = 1; i < rocks.length; i++){
            if(rocks[i] - now < mid){ //돌 - 현재 돌이 중간값보다 작으면 삭제가능
                removed++;
            }
            else{
                now = rocks[i]; //삭제못하면 현재 돌을 갱신
            }
        }

        if(removed > n){ //삭제가능개수가 n보다 크면 더 작은 값이 존재한다는 거니까 중간값 갱신
            max = mid - 1;
        }
        else {
            min = mid + 1 //반대면 중간값 키워서 갱신
        }  
    }
    answer = max; 
    return answer;
}

console.log(solution(25, [2,14,11,21,17], 2));
