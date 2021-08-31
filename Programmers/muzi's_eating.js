
// https://programmers.co.kr/learn/courses/30/lessons/42891?language=javascript# [무지의 먹방 라이브]

function solution(food_times, k) {

    let foodNum = food_times.length;
    let time = 0;
    let doneFood = 0;
    let i = 0;
    let nextFood = 0;
    
    while(time < k) { //elecrticity is ok yet
        if(food_times[i] != 0) {
            food_times[i] -= 1; //eat 1 sec
            i++;  
            time++;
            console.log('i',i);
            console.log('t',time);
        }
        else {
            i++;
            console.log('ei',i);
        }
        if(i > foodNum-1) i = 0; //elecrticity is ok yet but rotated one food arr
    }
    
    while(food_times[i] == 0 && i > foodNum-1) {
        i++;
        if(i > foodNum-1) i = 0;
        doneFood++;  
        console.log(i);
    }
    console.log(i);
    if(doneFood == foodNum) return -1;
    if(i > foodNum-1) i = 0;
    
    return (i+1 < foodNum) ? i+1 : i;
}