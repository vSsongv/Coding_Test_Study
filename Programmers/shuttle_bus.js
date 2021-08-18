// https://programmers.co.kr/learn/courses/30/lessons/17678[셔틀 버스]
// Js로 풀어보기!

//09:00부터 n회 t분 간격으로, m명이 탈 수 있다.
// n   t	m	timetable	이
// 1   1	5	["08:00", "08:01", "08:02", "08:03"]인 경우, "09:00"부터 운행하는데 4명이 서 있기 때문에 콘은 09:00에 와도 탈 수 있다.

function solution(n, t, m, timetable) {
    const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);
    var answer = '';
    let start_time = getTime("09:00");
    let last_crew_time = 0;
    timetable.sort();
    for(let i = 0; i < n; i++) {
        let totalCrewNum = 0;
        while (totalCrewNum < m && len(timetable)) {
            if(getTime(timetable[0]) <= start_time) {
                totalCrewNum++;
                last_crew_time = getTime(timetable[0]);
                timetable.shift();
            }
        }
    }
    return answer;
}