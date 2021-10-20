// 최대 선호 음식(DFS)
// 엘리트 학원에서 선생님과 학생들이 소풍을 갔습니다. 
// 선생님들은 학생들에게 요리를 해주기로 마음먹고, 학생들에게 각자의 취향에 대해서 물었다.
// 선생님들이 가지고 있는 양념재료의 종류는 D(1≤D≤15)종류입니다, 양념재료는 1부터 D까지 번호로 매겨져 있다.
// 각각의 학생들은 자기가 원하는 재료가 꼭 다 들어가야만 음식을 먹겠다고 합니다.
// 학생들은 총 N(1≤N≤30,000)명이 있고, 선생님이 사용할 수 있는 재료의 종류가 K(1≤K≤D)개 이하가 되도록 하려 한다. 
// 위의 조건을 만족하면서 최대 몇 명의 학생에게 음식을 만들어줄 수 있는지 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums 배열에 1번 학생부터 N번 학생까지의 음식취향에 관한 정보가 주어진다. 
// 배열의 원소는 학생이 좋아하는 재료의 번호이다. 재료의 번호는 1부터 D까지의 정수로 나타낸다.
// 원하는 재료가 없는 학생은 아무거나 먹겠다는 뜻으로 해석한다. 그 다음 D와 K가 입력된다.
// ▣ 출력설명
// 조건을 만족하는 최대인원을 반환합니다.
// ▣ 매개변수 형식
// [[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3
// ▣ 반환값 형식
// 6
// 입출력설명:
// nums 배열이 다음과 같다면 [[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]]
// 1번 학생은 1번 재료가 꼭 들어가야 먹으며, 2번학생은 2번과 3번 재료가 꼭 들어가야 먹습니다. 
// 5번학생은 원하는 재료가 없으므로 아무거나 먹겠다는 뜻입니다.
// 출력은 1, 2, 3번 재료를 사용해 음색을 만들면 1, 2, 3, 4, 5, 6번 학생들이 음식을 먹을 수 있어 최대인원은 6명입니다.

function solution(nums, d, k) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length; 
    let pow = Array(d+1).fill(0);
    let st = Array(n).fill(0);

    pow[1] = 1;
    for(let i = 2; i <= d; i++) {
        pow[i] = pow[i-1]*2;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            st[i] += pow[nums[i][j]]; //i번째 학생의 2진비트를 10진수로 바꾼 숫자가 들어감.
        }
    }
    function DFS(L, s, bit) {
        if(L == k) {
            let cnt = 0;
            for(let k = 0; k < n; k++) {
                if((bit & st[k]) == st[k]) cnt += 1;
            }
            answer = Math.max(answer, cnt);
        }
        else {
            for(let l = s; l <= d; l++) {
                DFS(L+1, l+1, bit+pow[l]);
            }
        }
    }
    DFS(0, 1, 0);
    return answer;
}

console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3));