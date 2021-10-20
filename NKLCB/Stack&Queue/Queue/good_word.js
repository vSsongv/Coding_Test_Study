// 좋은 단어(Queue)
// 엘리트 정보나라에서는 N개의 단어에 대하여 국민들에게 선호도 조사를 했습니다.
// N개의 단어에 대한 선호도 순위대로 단어가 차례대로 주어집니다. 
// 우리는 이 순위를 가지고 두 단어가 좋은 단어 사이인지 확인하려고 합니다. 
// 두 단어가 좋은 단어 사이가 되려면 일단 두 단어의 길이가 같아야 하고, 둘의 선호도 순위 차이가 M을 넘지 않아야 합니다.
// N개의 단어가 주어졌을 때 좋은 단어 쌍이 몇 개가 존재하는지 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 s에 N(2<=N<=200,000)개의 단어가 선호도 순위 기준으로 0위부터 N-1까지 차례대로 주어지고, 
// 매개변수 m에 M(1<=M<=N)가 주어진다. 각 단어의 길이는 20을 넘지 않습니다.
// ▣ 출력설명
// 좋은 단어가 몇 쌍인지 그 개수를 반환합니다.
// ▣ 매개변수 형식 1
// ["back", "seen", "big", "good", "size"], 2
// ▣ 반환값 형식 1
// 3
// 출력설명 : ("back", "seen"), ("seen", "good"), ("good", "size") 3쌍이 존재합니다.
// ▣ 매개변수 형식 2
// ["back", "seen", "good", "size"], 2
// ▣ 반환값 형식 2
// 5

function solution(s, m) {
    let answer = 0;
    let Queue = Array.from(Array(21), ()=>Array());
    for(let i = 0; i < s.length; i++) {
        let len = s[i].length;
        while(Queue[len].length && (i-Queue[len][0] > m)) {
            Queue[len].shift();
        }
        answer += Queue[len].length;
        Queue[len].push(i);
    }
    return answer;
}

console.log(solution(["back", "seen", "big", "good", "size"], 2));
console.log(solution(["back", "seen", "good", "size"], 2))