// 가장 가까운 큰수
// 자연수 N이 주어지면, N과 구성이 같으면서 N보다 큰 수 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// 구성이 같다는 말은 각 자릿수가 같은 숫자들로 이루어졌다는 의미입니다. 
// 예를 들어 123과 231은 서로 구성이 같습니다. 하지만 123과 215는 구성이 다릅니다.
// ▣ 입력설명
// 매개변수 n에 자연수 N(1<=N<=9999999)이 주어집니다.
// ▣ 출력설명
// N과 구성이 같으면서 N보다 큰 수 중 가장 작은 수를 반환합니다. 없으면 -1를 반환합니다.
// ▣ 매개변수 형식 1
// 123
// ▣ 반환값 형식 1
// 132
// ▣ 매개변수 형식 2
// 321
// ▣ 반환값 형식 2
// -1
// ▣ 매개변수 형식 3
// 20573
// ▣ 반환값 형식 3
// 20735

function solution(num) {
    let target = num;
    let flag = 0;
    let answer = [];
    let numArr = num.toString().split('').sort();
    let n = numArr.length
    let tmp = [];
    let check = Array(n).fill(0);
    function permutation(l) {
        if(l === n) {
            answer = tmp.join('');
            if(answer > target) {
                flag = 1;
                return answer;
            }
            return;
        }
        else {
            for(let i = 0; i <= n; i++) {
                if(check[i] === 0 && flag == 0) {
                    check[i] = 1;
                    tmp.push(numArr[i]);
                    permutation(l+1);
                    check[i] = 0;
                    tmp.pop();
                }
            }
        }
    }
    permutation(0);
    if(answer == target) console.log(-1);
    else console.log(answer);
}

console.log(solution(123));
console.log(solution(134546));
console.log(solution(10275));
console.log(solution(2364));