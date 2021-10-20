// 문자열 s가 주어지면 s가 최대 문자 1개까지 지워서 회문문자열이 되면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 s에 길이 100을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// “YES" or "NO"를 반환합니다.
// ▣ 매개변수 형식 1
// abcbdcba
// ▣ 반환값 형식 1
// YES
// ▣ 매개변수 형식 2
// abcabbakcba
// ▣ 반환값 형식 2
// YES
// ▣ 매개변수 형식 3
// abcacbakcba
// ▣ 반환값 형식 3
// NO

function solution(s) {
    let answer = "YES";
    let left = 0; let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            let sub1 = s.substring(left, right);
            let sub2 = s.substring(left + 1, right + 1);
            console.log(sub1, sub2);
            if (sub1 !== sub1.split("").reverse().join("") && sub2 !== sub2.split("").reverse().join("")) {
                answer = "NO";
                break;
            }
        }
        left += 1; right -= 1;
    }
    return answer;
}

console.log(solution("abcbdcba"));