// 임시반장 정하기
// 김갑동 선생님은 올해 6학년 1반 담임을 맡게 되었다. 
// 김갑동 선생님은 우선 임시로 반장을 정하고 학생들이 서로 친숙해진 후에 정식으로 선거를 통해 반장을 선출하려고 한다. 
// 그는 자기반 학생 중에서 1학년부터 5학년까지 지내오면서 한번이라도 같은 반이었던 사람이 가장 많은 학생을 임시 반장으로 정하려 한다.
// 그래서 김갑동 선생님은 각 학생들이 1학년부터 5학년까지 몇 반에 속했었는지를 나타내는 표를 만들었다. 예를 들어 학생 수가 5명일 때의 표를 살펴보자.
// 1학년 2학년 3학년 4학년 5학년
// 1번 학생 2 3 1 7 3
// 2번 학생 4 1 9 6 8
// 3번 학생 5 5 2 4 4
// 4번 학생 6 5 2 6 7
// 5번 학생 8 4 2 2 2
// 위 경우에 4번 학생을 보면 3번 학생과 2학년 때 같은 반이었고, 3번 학생 및 5번 학생과 3학년 때 같은 반이었으며, 2번 학생과는 4학년 때 같은 반이었음을 알 수 있다. 
// 그러므로 이 학급에서 4번 학생과 한번이라도 같은 반이었던 사람은 2번 학생, 3번 학생과 5번 학생으로 모두 3명이다. 
// 이 예에서 4번 학생이 전체 학생 중에서 같은 반이었던 학생 수가 제일 많으므로 임시 반장이 된다.
// 각 학생들이 1학년부터 5학년까지 속했던 반이 주어질 때, 임시 반장을 정하는 프로그램을 작성하시오.
// ▣ 입력설명
// 매개변수 students에 1번 학생부터 차례대로 각 행마다 1학년부터 5학년까지 몇 반에 속했었는지를 나타내는 5개의 정수가 주어진다. 
// 주어지는 정수는 모두 1 이상 9 이하의 정수이다.
// 학생 수는 3 이상 1000 이하이다.
// ▣ 출력설명
// 임시 반장으로 정해진 학생의 번호를 반환합니다. 단, 임시 반장이 될 수 있는 학생이 여러 명
// 인 경우에는 그 중 가장 작은 번호만 반환합니다.
// ▣ 매개변수형식 1
// [[2, 3, 1, 7, 3], [4, 1, 9, 6, 8], [5, 5, 2, 4, 4], [6, 5, 2, 6, 7], [8, 4, 2, 2, 2]]
// ▣ 반환값 형식 1
// 4

function solution(students) {
    let cnt = 0, max = 0, answer = 0;
    for(let i = 0; i < students.length; i++) {
        cnt = 0;
        for(let j = 0; j < students.length; j++) {
            for(let k = 0; k < 5; k++) {
                if(students[i][k] == students[j][k]) {
                    console.log(i+1,"번 학생은");
                    console.log(j+1,"번 학생과");
                    console.log(students[i][k],"반으로 같음");
                    cnt++;
                    break;
                }
            }
        }
        if(cnt > max) {
            max = cnt;
            answer = i;
        }
    }
    return answer+1;
}

console.log(solution([[2, 3, 1, 7, 3], [4, 1, 9, 6, 8], [5, 5, 2, 4, 4], [6, 5, 2, 6, 7], [8, 4, 2, 2, 2]]));