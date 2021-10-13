// 동전교환
// 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 
// 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명
// 매개변수 nums에 N(2<=N<=50)개의 동전의 종류가 주어진다. 매개변수 m에 거슬러 줄 금액
// M(1<=M<=500,000)이 주어진다. 각 단위의 동전이 A1<A2<...Ai<An 이라면 A1은 항상 1원짜
// 리이고, Ai는 A(i-1) 동전의 배수입니다. 동전의 종류는 오름차순으로 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
// ▣ 매개변수 형식 1
// [1, 5, 10], 15
// ▣ 반환값 형식 1
// 2

function solution(coins, target) {
    let answer = 0;
    coins.sort(function(a, b) {
        return b - a;
    });    
    for(let coin of coins) {
        while(target >= coin)  { //일단 제일 큰 동전부터 써야 하므로 while사용
            target -= coin;
            answer += 1;
        }
    }
    return answer;
}

// function solution(coins, target) {
//     let answer = 0;
//     for(let i = coins.length-1; i >= 0; i--) {
//         answer += (parseInt(target/coins[i]));
//         target = target % coins[i]
//     }
//     return answer;
// }

console.log(solution([1, 5, 10], 15));
console.log(solution([1, 9, 12], 27));