// 최소값 만들기
// 자연수 N이 주어지면 N의 각 자릿수 중 K개를 지워 최솟값을 만드는 프로그램을 작성하세요.
// 만약 N으로 2322113이 주어지고, K=3이라면 2322113중에서 3, 2, 2 이렇게 3개를 지워서 최솟값은 2113 이 됩니다. 
// 최솟값은 N값일 때 각 자릿수의 순서를 유지해야 하며, 제일 앞자리의 0은 자릿수로 인정하지 않습니다.
// ▣ 입력설명
// 매개변수 num에 N(1<=N<=100,000,000)이 주어집니다. 매개변수 k에 K(2<=K<=N의 길이)가 주어집니다.
// ▣ 출력설명
// 최솟값을 반환합니다. 자릿수가 다 지워지고 없으면 0을 반환합니다.
// ▣ 매개변수 형식 1
// 2322113, 3
// ▣ 반환값 형식 1
// 2113
// ▣ 매개변수 형식 2
// 200200, 1
// ▣ 반환값 형식 2
// 200
// ▣ 매개변수 형식 3
// 123, 3
// ▣ 반환값 형식 3
// 0

function solution(num, k) {
    let answer = 0;
    let stack = [];

    for(n of num.toString()) {
        while(stack.length && k > 0 && stack[stack.length-1] > n) { //stack에 마지막 애가 지금 넣을 애보다 크면
            stack.pop(); //stack에서 빼주자.
            k -= 1; //k값은 감소시켜야함.
        }
        stack.push(n); //이번 애는 일단 push
    }
    answer = stack.join('');
    answer = answer.substring (0,answer.length-k);
    if(answer.length == 0) return 0;
    return Number(answer);
}

console.log(solution(7612345, 5)); //12
console.log(solution(999102345, 5)); //234
console.log(solution(10000023, 2)); //2
console.log(solution(30000043, 3)); //0
console.log(solution(12345670, 7)); //0
console.log(solution(123456, 3)); //123
console.log(solution(12003, 3)); //0
console.log(solution(9, 1)); //0
console.log(solution(98765432, 7)); //2
console.log(solution(57622312, 4)); //2212
