// https://programmers.co.kr/learn/courses/30/lessons/42891 [무지의 먹방]

function solution(food_times, k) {
    let foodNum = food_times.length;
    let times = [];
    let priority = [];
    
    let prio_times = [];
    for (let i = 0; i<foodNum; i++) {
        prio_times.push([i, food_times[i]]);
    }

    prio_times.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    for(let i = 0; i < foodNum; i++) {
        times[i] = prio_times[i][1];
        priority[i] = prio_times[i][0]+1;
    }

    let sumOfTime = 0;
    let differ = 0;
    
    for(let t = 0; t < foodNum; t++) {
        differ = (t == 0) ? times[t] - 0 : times[t] - times[t-1];
        sumOfTime = differ * (foodNum - t);
        if(k < sumOfTime) { //shutdowned before eat all food
            priority = priority.slice(t);
            priority.sort(function(a, b) {
                return a - b;
            });
            return priority[k % (foodNum - t)];
        } 
        k -= sumOfTime; //update k
    }
    return -1; //ate all food before shut down.
}
