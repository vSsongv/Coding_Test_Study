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
        let max = 1;
        orders.forEach((order) => {
            if (order.length >= course[i]) {
                let combination = combi(order.split("").sort(), course[i]);
                combination.forEach((item) => {
                    item = item.join("");
                    if (item in dict) {
                        dict[item]++;
                        max = (max < dict[item]) ? dict[item] : max;
                    }
                    else dict[item] = 0;
                });
            }
        });
        for (const [key, value] of Object.entries(dict)) {
            if (value == max) {
                console.log(key, value);
                answer.push(key);
            }
        }
    }
    return answer.sort();
}