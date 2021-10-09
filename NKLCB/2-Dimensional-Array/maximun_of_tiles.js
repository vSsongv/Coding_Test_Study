// 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
// ▣ 입력설명
// 매개변수 board에 N*N(1<=N<=50) 크기의 2채원 배열이 주어집니다.
// 배열의 원소는 100을 넘지 않는다.
// ▣ 출력설명
// 최대합을 반환합니다.
// ▣ 매개변수 형식 1
// [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27],
// [19, 13, 30, 13, 19]]
// ▣ 반환값 형식 1
// 155

function solution(tiles) {
    let len = tiles[0].length;
    let answer = 0;
    let sum1 = 0; sum2 = 0;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            sum1 += tiles[i][j]; ///row
            sum2 += tiles[j][i]; //col
        } 
        answer = Math.max(sum1, sum2);
    }
    sum1 = 0; sum2 = 0; //reset
    for(let j = 0; j < len; j++) {
        sum1 += tiles[j][j]; //left cross
        sum2 += tiles[len-j-1][j];
    }
    answer = Math.max(sum1, sum2);
    return answer;
}

console.log(solution([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27],[19, 13, 30, 13, 19]]))