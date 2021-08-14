// https://programmers.co.kr/learn/courses/30/lessons/82612 [부족한 금액 계산하기]

function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i <= count; i++) {
        sum = sum + price * i;
    }
    return (money - sum > 0) ? 0 : Math.abs(money - sum);
}