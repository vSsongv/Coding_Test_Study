// https://programmers.co.kr/learn/courses/30/lessons/43236
function solution(distance, rocks, n) {
    let answer = 0;
    rocks=[0,...rocks.sort((a,b)=>a-b),distance];
    
    let min = 0;
    let max = rocks[rocks.length-1];
    
    while(min <= max) {
        let mid = Math.floor((max+min)/2);
        let now = 0;
        let removed = 0;

        for(let i = 1; i < rocks.length; i++){
            if(rocks[i] - min){
                removed++;
            }
            else{
                now = rocks[i];
            }
        }

        if(removed > n){
            max = mid - 1;
        }
        else {
            min = mid + 1
        }  
    }
    answer = max; 
    return answer;
}

console.log(solution(25, [2,14,11,21,17], 2));