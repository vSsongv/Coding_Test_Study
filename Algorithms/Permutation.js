// 중복순열 구하기
// 1부터 N까지 번호가 적힌 구슬이 있습니다. 
// 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// ▣ 입력설명
// 매개변수 n에 자연수 N(3<=N<=10)이 주어지고, 매개변수 m에 M(2<=M<=N) 이 주어집니다.
// ▣ 출력설명
// 중복순열의 경우를 배열 형태로 반환합니다. 각 경우의 순서는 오름차순입니다.
// ▣ 매개변수 형식 1
// 3 2
// ▣ 반환값 형식 1
// [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

function solution1(n, m) {
    let answer = [];
    let tmp = [];
    function permutation(l) {
        if (l === m) {
            answer.push(tmp.slice());
        }
        else {
            for (let i = 1; i <= n; i++) {
                tmp.push(i);
                permutation(l + 1);
                tmp.pop();
            }
        }
    }
    permutation(0);
    return answer;
}

console.log(solution1(3, 2));

// 순열 구하기
// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=10)개의 자연수가 오름차순으로 주어집니다.
// 매개변수 m에 M(2<=M<=N)이 주어집니다.
// ▣ 출력설명
// 중복순열의 결과를 배열형태로 반환합니다.
// ▣ 매개변수 형식 1
// [3, 6, 9], 2
// ▣ 반환값 형식 1
// [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

function solution2(nums, m) {
    let answer = [];
    let tmp = [];
    let check = Array(nums.length).fill(0);
    function permutation(l) {
        if (l === m) {
            answer.push(tmp.slice());
        }
        else {
            for (let i = 0; i < nums.length; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    tmp.push(nums[i]);
                    permutation(l + 1);
                    check[i] = 0;
                    tmp.pop();
                }
            }
        }
    }
    permutation(0);
    return answer;
}

console.log(solution2([3, 6, 9], 2));
