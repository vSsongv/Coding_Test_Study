function solution(food_times, k) {

    let foodNum = food_times.length;
    let time = 0;
    let doneFood = 0;
    let i = 0;
    
    while(time < k) { //elecrticity is ok yet
        if(food_times[i] != 0) {
            food_times[i] -= 1; //eat 1 sec
            i++;  
            time++;
        }
        else {
            i++;
        }
        if(i > foodNum-1) i = 0; //elecrticity is ok yet but rotated one food arr
    }
    
    if(food_times[i] == 0) {
        for(let j = 0; j < foodNum; j++) { //loop only for size of food_times
            if(food_times[i] == 0) {
                doneFood++;
                i++;
                if(i > foodNum-1) i = 0;
            }
            else break;
        }
    }

    if(doneFood == foodNum) return -1;
    
    return i+1;
}