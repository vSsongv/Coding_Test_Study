// https://programmers.co.kr/learn/courses/30/lessons/42891 [무지의 먹방]

function solution(food_times, k) {
    let foodNum = food_times.length;
    let times = [];
    let priority = [];
    let prio_times = [];

    for (let i = 0; i < foodNum; i++) {
        prio_times.push([i, food_times[i]]); //index와 해당 음식을 먹는 데 걸리는 시간 넣어주기.
    }

    prio_times.sort(function (a, b) {
        return a[1] - b[1]; //먹는 시간이 적은 순서대로 sort.
    });

    for (let i = 0; i < foodNum; i++) {
        times[i] = prio_times[i][1]; //times에 먹는 시간을 넣어주고
        priority[i] = prio_times[i][0] + 1; //priority에 해당 index+1한 값을 넣어준다.
    }

    let sumOfTime = 0; //현재 먹은 시간의 합
    let differ = 0; //먹은 값의 차이

    for (let t = 0; t < foodNum; t++) {
        differ = (t == 0) ? times[t] - 0 : times[t] - times[t - 1]; //앞의 값을 뒤의 값에서 순차적으로 빼 줌.
        sumOfTime = differ * (foodNum - t); //현재 시간을 뒤의 모든 값에서 한번씩 빼줘야 함.
        if (k < sumOfTime) { //shutdowned before eat all food
            priority = priority.slice(t); //현재 index부터 다 잘라낸다.
            priority.sort(function (a, b) { //원래 인덱스 순서대로 돌려놓고,
                return a - b;
            });
            return priority[k % (foodNum - t)]; //내가 이제 먹어야 되는 음식은 k % foodNum한 index값.
        }
        k -= sumOfTime; //update k
    }
    return -1; //ate all food before shut down.
}

function solution(times, k) {
    times.unshift(0);
    let sT = times.slice();
    sT.sort((a, b) => a - b);
    let rest = times.length - 1;
    for (let i = 1; i < sT.length; i++) {
        if (k < (rest * (sT[i] - sT[i - 1]))) {
            let idx = k % rest;
            let cnt = 0;
            for (let j = 1; j < times.length; j++) {
                if (times[j] >= sT[i]) {
                    if (cnt == idx) {
                        return j;
                    }
                    cnt++;
                }
            }
        }
        else {
            k -= (rest * (sT[i] - sT[i - 1]));
            rest--;
        }
    }
    return -1;
}


console.log(solution([7, 5, 10, 3, 32, 41, 26, 30, 28], 7));
