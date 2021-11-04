// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
// ▣ 입력설명
// 매개변수 s에 S문자열이 입력되고, 매개변수 t에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 반환합니다.
// ▣ 매개변수 형식 1
// bacacbcba, abc
// ▣ 반환값 형식 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
// ▣ 매개변수 형식 2
// bacaAacba, abc
// ▣ 반환값 형식 2
// 3

//target 문자열과 arr에서 꺼내서 비교하고 있는 str해시가 따로 있다고 생각하자.
//target  문자열들은 -1의 값을 가지고 있고 비교하고 있는 str문자들의 개수와 연산하여 0이 된다면 아나그램 완성.

function solution(s, target) {
    let answer = 0;
    let stringHash = new Map();

    for (let s of target) stringHash.set(s, (stringHash.get(s) || 0) - 1); //map에 target 문자열을 -1을 초기값으로 하나씩 넣어둔다.

    let len = target.length - 1;

    for (let i = 0; i < len; i++) {
        stringHash.set(s[i], (stringHash.get(s[i]) || 0) + 1);
        if (stringHash.get(s[i]) === 0) stringHash.delete(s[i]); //미리 target 개수-1만큼 hash 넣는다. 이때 같은 문자가 있으면 1을 더해주고, 0이 되면(아나그램이 된다면) hash에서 제거해준다.
    }

    let left = 0;
    for (let right = len; right < s.length; right++) { //target-1개만큼 해시에 들어가 있으므로 arr[target.length]부터 
        stringHash.set(s[right], (stringHash.get(s[right]) || 0) + 1); //해당 문자는 확인할 대상들이다. 1을 더한다.
        if (stringHash.get(s[right]) === 0) stringHash.delete(s[right]); //만약 값이 0이라면 hash에서 삭제해주고. target개수 만큼 존재한다는 의미니까.
        if (stringHash.size === 0) answer += 1; //hash의 size가 0이라는 것은 아나그램을 만들 수 있다는 의미이다.
        stringHash.set(s[left], (stringHash.get(s[left]) || 0) - 1);//이제 제일 왼쪽 애는 안 볼 거니까 값 -1주기
        if (stringHash.get(s[left]) == 0) stringHash.delete(s[left]); //비교할 가치도 없으면 map에서 없애준다.
        left += 1; //left를 이동시킨다.
    }
    return answer;
}

console.log(solution("bacacbcba", "abc"));
console.log(solution("bacaAacba", "abc"));