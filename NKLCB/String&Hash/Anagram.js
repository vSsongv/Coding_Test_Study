// Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만,
// 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 즉 어느 한 단어를 재
// 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.
// ▣ 입력설명
// 매개변수 s1에 첫 번째 단어가 입력되고, 매개변수 s2에 두 번째 단어가 입력됩니다.
// 단어의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 두 단어가 아나그램이면 “YES"를 반환하고, 아니면 ”NO"를 반환합니다.
// ▣ 입력예제 1
// AbaAeCe, baeeACA
// ▣ 출력예제 1
// YES

function solution(s) {
    let Hash1 = new Map(); //hash map 선언
    let Hash2 = new Map();
    let str = s.split(", ");
        
    for(let i = 0; i < str[0].length; i++) { //첫번째 문자열에 대한 hashmap 만들기
        if(str[0][i] in Hash1) {
            Hash1[str[0][i]] += 1;
        }
        else Hash1[str[0][i]] = 1;
    }

    for(let j = 0; j < str[1].length; j++) { //두번째 문자열에 대한 hashmap 만들기
        if(str[1][j] in Hash2) {
            Hash2[str[1][j]] += 1;
        }
        else Hash2[str[1][j]] = 1;
    }

    for(let [Alpha, cnt] of Object.entries(Hash1)) {
        if(Hash2[Alpha] != cnt) return "NO";
    }
    return "YES";
}

console.log(solution("abaCC, Caaab"));