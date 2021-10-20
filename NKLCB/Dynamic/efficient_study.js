// 효율적인 공부
// 철수는 과학적으로 공부하기 위해 전문 병원에서 철수의 신체 리듬에 따라 공부의 효율성을 표시한 표를 받았다.
// 표는 N(1<=N<=1,000,000)시간의 일정을 겹쳐지는 M(1<=M<=1,000)구간별로 공부의 효율성이 표시되어 있다.
// 각 구간은 시작시간(0<=st<N)과 끝나는 시간(st<et<=N) 그리고 해당 구간에서의 공부의 효율성이 주어진다.
// 철수는 한 구간을 공부하고 나면 꼭 휴식시간(1<=R<=N)을 가져야만 합니다.
// 철수가 N시간동안 공부를 할 때 각 구간을 잘 선택해서 공부를 열심히 한다면 가장 높은 효율성을 얼마인지 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 times에 M 구간의 시작시간, 끝나는 시간 그리고 해당구간의 공부효율성이 주어집니다. 매개변수 r에 R값이 주어집니다.
// ▣ 출력설명
// 가장 높은 효율성을 반환하세요.
// ▣ 매개변수 형식 1
// [[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]], 2
// ▣ 반환값 형식 1
// 28

function solution(times, r) {
    let answer = 0;
    let m = times.length;
    times.sort((a,b) => a[1] - b[1]);
    let dp = new Array(times.length).fill(0);
    for(let i = 0; i < m; i++) { //dp 0번째 값은 times배열의 첫번째 효율성.
        dp[i] = times[i][2];
        for(let j = i-1; j >= 0; j--) {
            if(times[j][1] + r <= times[i][0] && dp[j] + times[i][2] > dp[i]) dp[i] = dp[j] + times[i][2];
        }
        answer = Math.max(answer, dp[i]);
    }
    return answer;

    //times 다음 값의 시작하는 시간이 앞에 값의 끝나는 시간+2보다 클 때 공부 구간이 될 수 있음, 만약 많으면 효율성이 제일 높은 애로.

}

console.log(solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]], 2));