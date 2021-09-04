// https://programmers.co.kr/learn/courses/30/lessons/42891 [무지의 먹방]

function solution(food_times, k) {

    let foodNum = food_times.length;
    let time = 0;
    let doneFood = 0;
    let i = 0;
    
    while(time < k) { //elecrticity is ok yet
        if(food_times[i] != 0) {
            food_times[i] -= 1; //eat 1 sec
            if(food_times[i] == 0) {
                doneFood++;
                if(doneFood == foodNum) return -1;
            }
            time++;
        }
        i+=1;
        if(i > foodNum-1) i = 0; //elecrticity is ok yet but rotated one food arr
    }
    
    if(food_times[i] == 0) {
        for(let j = 0; j < foodNum; j++) { //loop when 
            if(food_times[i] == 0) {
                i += 1;
                if(i > foodNum-1) i = 0;
            }
            else break;
        }
    }    
    return i+1;
}
