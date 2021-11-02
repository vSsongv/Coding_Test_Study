// 연속된 자연수의 합
// N입력으로 양의 정수 N이 입력되면 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 방법의 가짓수를 출력하는 프로그램을 작성하세요.
// 만약 N=15이면
// 7+8=15
// 4+5+6=15
// 1+2+3+4+5=15
// 와 같이 총 3가지의 경우가 존재한다.
// ▣ 입력설명
// 매개변수 n에 양의 정수 N(7<=N<100,000)이 주어집니다.
// ▣ 출력설명
// 총 경우수를 반환합니다.
// ▣ 매개변수 형식 1
// 15
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// 45678
// ▣ 반환값 형식 2
// 7
// ▣ 매개변수 형식 3
// 98765
// ▣ 반환값 형식 3
// 3

// function solution(num) {
//     let nums = [];
//     let answer = 0, sum = 0, left = 0;
//     for (let i = 0; i < Math.ceil(num / 2); i++) {
//         nums[i] = i + 1; //num의 중간까지만 체크하면 된다.
//     }
//     for (let right = 0; right < nums.length; right++) {
//         sum += nums[right]; //sum에 right까지의 값을 더해주고,
//         while (sum > num) {  //sum이 num보다 커지면
//             sum -= nums[left++]; //작아질때까지 left를 이동시키면서 빼준다.
//         }
//         if (sum === num) answer += 1; //sum과 num이 같아지면 답 체크
//     }
//     return answer;
// }

function solution(num) {
    let answer = 0;
    cnt = 1;
    num -= 1;
    while (num > 0) { //num이 0보다 큰 경우에,
        cnt++; //해당 숫자를 cnt개의 합으로 표현할지를 정해서
        num -= cnt; //num에서 cnt개를 빼준 후
        if (num % cnt == 0) {
            answer += 1; //만약 cnt개로 나눈 값을 똑같이 나눠줄 수 있으면 num을 만들 수 있음.
        }
    }
    return answer;
}

console.log(solution(6));
// console.log(solution(17));
// console.log(solution(45678));
// console.log(solution(98765));