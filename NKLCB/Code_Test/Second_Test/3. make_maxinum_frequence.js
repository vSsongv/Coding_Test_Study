// 길이가 N인 원소가 정수인 수열이 주어지면 이 수열에서 특정 위치의 숫자를 선택해 1증가시킬 수 있는 작업을 k번 하여 주어진 수열의 특정 숫자의 빈도수가 최대가 되도록 합니다.
// 만약 수열이[1, 2, 4, 7]이고 k = 5라면 1을 세 번 증가시키고, 2를 두 번 증가시켜 주어진 수열을[4, 4, 4, 7]로 만들면 수열의 특정 숫자 최대 빈도수는 3입니다.

// ▣ 입력설명
// 매개변수 nums 에 길이가 N(3 <= N <= 100, 000)인 수열이 전달됩니다.원소는 100, 000을 넘지 않습니다.매개변수 k에 100, 000이하의 자연수가 전달됩니다.

// ▣ 출력설명
// 만들 수 있는 수열의 특정 숫자 최대 빈도수를 반환합니다.

// ▣ 매개변수 형식 1
// [5, 7, 8, 2, 9, 6, 3], 10

// ▣ 반환값 형식 1
// 5

// ▣ 매개변수 형식 2
// [-1, 1, 2, 4, 0, -2], 6

// ▣ 반환값 형식 2
// 4

function solution(nums, k) {
    var answer = 0;
    nums.sort((a, b) => a - b);
    let n = parseInt(nums.length / 2); //더해서 만들 수 있는 숫자의 최소 시작 index.

    function count(value, n) {
        let cnt = 0;
        let poss = k;
        for (let i = n - 1; i >= 0; i--) {
            let sub = value - nums[i];
            if (i === 0) {
                if (poss - sub > 0) {
                    
                }
            }
            poss -= sub;
            if (poss < 0) return cnt;
            cnt += 1;
        }
        if(poss !== 0)
        return cnt;
    }

    while (n !== nums.length) {
        let val = nums[n];
        answer = Math.max(answer, count(val, n));
        n += 1;
    }

    return answer + 1;
}

// console.log(solution([5, 7, 8, 2, 9, 6, 3], 10)); // 5
// console.log(solution([-1, 1, 2, 4, 0, -2], 6)); // 4
console.log(solution([0, 0, 1, 1, 0, 0], 6)); // 5
// console.log(solution([0, 0, 0, 0, 0], 6)); // 4