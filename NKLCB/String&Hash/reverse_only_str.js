// 영어 알파벳과 특수문자로 구성된 문자열이 주어지면 영어 알파벳만 뒤집고, 특수문자는 자기자리에 그대로 있는 문자열을 만들어 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 s에 길이 100을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// 알파벳만 뒤집힌 문자열을 반환합니다.
// ▣ 매개변수 형식 1
// a#b!GE*T@S
// ▣ 반환값 형식 1
// S#T!EG*b@a

function solution(s) {
    s = s.split('');
    let left = 0; let right = s.length-1;
    while(left < right) {
        if((/[a-zA-Z]/g).test(s[left]) && (/[a-zA-Z]/g).test(s[right])) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
        }
        left += 1; right -=1;
    }
    return s.join('');
}

console.log(solution("a#b!GE*T@S"));