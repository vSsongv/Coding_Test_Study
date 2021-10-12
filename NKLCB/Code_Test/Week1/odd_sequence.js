// k개 홀수가 있는 연속부분수열
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 홀수의 개수가 k개인 연속부분수열의 개수를 구하려고 합니다.
// 만약 N=5인 수열이 아래와 같고
// [1, 2, 1, 1, 2]
// k=2라면 홀수의 개수가 2개인 연속부분수열은
// {1, 2, 1}, {2, 1, 1}, {2, 1, 1, 2}, {1, 1}, {1, 1, 2} 로 5가지입니다.
// ▣ 입력설명
// 매개변수 nums에 N(1≤N≤500,000)길이의 수열이 주어집니다.
// 매개변수 k에 k(1≤k≤50,000)이 주어집니다.
// 수열의 원소값은 1,000을 넘지 않는 자연수입니다.
// ▣ 출력설명
// 경우의  수를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 1, 1, 2], 2
// ▣ 반환값 형식 1
// 5
// ▣ 매개변수 형식 2
// [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2
// ▣ 반환값 형식 2
// 16
// ▣ 매개변수 형식 3
// [2, 4, 6], 1
// ▣ 반환값 형식 3
// 0

function solution(nums, k) {
    let cnt = 0, answer = 0;
    let tmp = [];
    for(let i = 0; i < nums.length-1; i++) {
        let tmp2 = [];
        tmp2.push(nums[i]);
        if(nums[i] % 2 != 0) {
            cnt += 1;
        }
        for(let j = i+1; j < nums.length; j++) {
            tmp2.push(nums[j]);
            if(nums[j] % 2 != 0) {
                cnt += 1;
            }
            if(cnt == k) {
                answer += 1;
                tmp.push(tmp2);
            }
        }
        cnt = 0;
    }
    return answer;
}

console.log(solution([2,2,2,1,2,2,1,2,2,2], 2)); //16
console.log(solution([1,1,2,1,1], 3)); //2
console.log(solution([2,4,6], 1)); //0
console.log(solution([1,2,3,4,5,6,7,8,9], 2)); //12
console.log(solution([1,3,5,7,9,11,13], 3)); //5
console.log(solution([1,2,4,5,7,8,12,14,16,17,19], 2)); //22
console.log(solution([3], 1)); //1
console.log(solution([1,1,1,1,1], 1)); //5
console.log(solution([2,2,2,2,2,2,2,1], 1)); //8
console.log(solution([2,2,1,2,2,6], 1)); //12

// function solution(nums, k) {
//     let answer = 0;
//     function counting(k) {
//       let left = 0;
//       let odd = 0;
//       let sum = 0;
//       for (let right = 0; right < nums.length; right++) {
//         if (nums[right] % 2 === 1) odd++;
//         while (odd > k) {
//           if (nums[left] % 2 === 1) odd--;
//           left++;
//         }
//         sum += right - left + 1;
//       }
//       return sum;
//     }
//     answer = counting(k) - counting(k - 1);
//     return answer;
// }
// console.log(solution([2,2,2,1,2,2,1,2,2,2], 2)); //16
// console.log(solution([1,1,2,1,1], 3)); //2
// console.log(solution([2,4,6], 1)); //0
// console.log(solution([1,2,3,4,5,6,7,8,9], 2)); //12
// console.log(solution([1,3,5,7,9,11,13], 3)); //5
// console.log(solution([1,2,4,5,7,8,12,14,16,17,19], 2)); //22
// console.log(solution([3], 1)); //1
// console.log(solution([1,1,1,1,1], 1)); //5
// console.log(solution([2,2,2,2,2,2,2,1], 1)); //8
// console.log(solution([2,2,1,2,2,6], 1)); //12



// function solution(nums, k) {
//     let answer = 0;
//     let cnt = 0;
//     let nH = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] % 2 === 1) cnt++;

//       if (cnt === k) answer++;
//       if (nH.has(cnt - k)) answer += nH.get(cnt - k);
//       nH.set(cnt, nH.get(cnt) + 1 || 1);
//     }
//     return answer;
// }
// console.log(solution([2,2,2,1,2,2,1,2,2,2], 2)); //16
// console.log(solution([1,1,2,1,1], 3)); //2
// console.log(solution([2,4,6], 1)); //0
// console.log(solution([1,2,3,4,5,6,7,8,9], 2)); //12
// console.log(solution([1,3,5,7,9,11,13], 3)); //5
// console.log(solution([1,2,4,5,7,8,12,14,16,17,19], 2)); //22
// console.log(solution([3], 1)); //1
// console.log(solution([1,1,1,1,1], 1)); //5
// console.log(solution([2,2,2,2,2,2,2,1], 1)); //8
// console.log(solution([2,2,1,2,2,6], 1)); //12