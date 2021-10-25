// 소마는 두데지 게임을 좋아한다. 두더지들은 특정 시간에 올라와서 1초동안 올라와 있는다.
// 이때 소마는 1초에 한번만 두더지를 칠 수 있고 소마가 두더지를 치게 되면 해당 두더지에 적혀있는 점수를 얻게 된다.
// n*n 크기에 존재하는 n^2마리의 두더지 각각에 대해서 올라오는 시간이 주어질 때, 소마가 게임을 통해서 얻을 수 있는 점수의 최댓값을 출력하시오.

function getMaxScore(moleInfo) {
    let answer = 0;
    let time = new Map();
    for (let i = 0; i < moleInfo.length; i++) {
        for (let s of moleInfo[i]) {
            time.set(s, Math.max(time.get(moleInfo[i][s]) || i + 1, i + 1));
        }
    }
    for (let [t, s] of time) {
        answer += s; //map이 완성되면 모든 초에 대해 최고 점수가 입력되어 있으므로, 모든 점수를 더해주기만 하면 됩니다.
    }
    return answer;
}

console.log(getMaxScore([[1, 3, 5], [2, 4], [1, 2], [3]])); //13
console.log(getMaxScore([[1, 2, 4], [1, 6], [2, 5], [4], [3, 5]]));