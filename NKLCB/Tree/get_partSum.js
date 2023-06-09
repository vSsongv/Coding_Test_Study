// 구간합 구하기(인덱스 트리)
// 어떤 N개의 수가 주어져 있다. 그런데 중간에 수의 변경이 빈번히 일어나고 그 중간에 어떤부분의 합을 구하려 한다. 
// 만약에 1,2,3,4,5 라는 수가 있고, 3번째 수를 6으로 바꾸고 2번째 부터 5번째까지 합을 구하라고 한다면 17을 출력하면 되는 것이다. 
// 그리고 그 상태에서 다섯번째 수를 2로 바꾸고 3번째부터 5번째까지 합을 구하라고 한다면 12가 될 것이다.
// ▣ 입력설명
// 매개변수 nums에 N개의 수열이 주어집니다. 매개변수 order에 [a, b, c]로 이루어진 순서쌍이 주어집니다. 
// a가 1이면 b번째 수를 c로 바꾸라는 의미입니다. a가 2이면 b번째부터 c번째 까지의 수들의 합을 구하라는 의미입니다.
// 입력으로 주어지는 모든 수는 -2^63보다 크거나 같고, 2^63-1보다 작거나 같은 정수이다.
// ▣ 출력설명
// 각각 차례대로 구한 구간합을 반환합니다. 단, 정답은 -2^63보다 크거나 같고, 2^63-1보다 작거나 같은 정수이다.
// ▣ 매개변수 형식 1
// [1, 2, 3, 4, 5], [[1, 3, 6], [2, 2, 5], [1, 5, 2], [2, 3, 5]]
// ▣ 반환값 형식 1
// [17, 12]

function solution(nums, order) {
    let tree = new Array(100).fill(0);
    let answer = [];
    let n = nums.length;
    let s = 1;
    while (s < n) s *= 2;

    for (let i = 0; i < n; i++) tree[s + i] = nums[i];
    for (let j = s - 1; j > 0; j--) tree[j] = tree[j * 2] + tree[j * 2 + 1];

    function update(idx, val) {
        while (idx > 0) {
            tree[idx] += val;
            idx = Math.floor(idx / 2);
        }
    }
    function get(s, e) {
        let result = 0;
        while (s <= e) {
            if (s % 2 === 1) result += tree[s];
            if (e % 2 === 0) result += tree[e];
            s = Math.floor((s + 1) / 2);
            e = Math.floor((e - 1) / 2);
        }
        return result;
    }

    for (const [a, b, c] of order) {
        if (a === 1) update(b + s - 1, c - tree[b + s - 1]);
        else answer.push(get(b + s - 1, c + s - 1));
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5], [[1, 3, 6], [2, 2, 5], [1, 5, 2], [2, 3, 5]]));