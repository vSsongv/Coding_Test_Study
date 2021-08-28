// https://programmers.co.kr/learn/courses/30/lessons/72411 [메뉴 리뉴얼]

function combi(order, num) {
    let results = [];
    if (num == 1) {
        return order.map((element) => [element]);
    }
    order.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = combi(rest, num - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function solution(orders, course) {
    let answer = [];
    for (let i = 0; i < course.length; i++) {
        let dict = {};
        let max = 1; //초기값이 0이므로 1이상이면 2번이상 주문된것
        orders.forEach((order) => {
            if (order.length >= course[i]) {
                let combination = combi(order.split("").sort(), course[i]);
                combination.forEach((item) => {
                    item = item.join("");
                    if (item in dict) {
                        dict[item]++; //모든 order값에 대해 조합을 만들기 때문에 dict내에 key가 있으면 또 주문된 것임.
                        if(max < dict[item]) max = dict[item]; //최대 주문횟수 갱신.
                    }
                    else dict[item] = 0;
                });
            }
        });
        for (const [key, value] of Object.entries(dict)) { //dict를 돌면서
            if (value == max) { //최대 주문횟수와 같은 val값이 있으면
                answer.push(key); //answer에 push.
            }
        }
    }
    return answer.sort();
}