# https://programmers.co.kr/learn/courses/30/lessons/17678[셔틀 버스]

#09:00부터 n회 t분 간격으로, m명이 탈 수 있다.
# n  t	m	timetable	이
# 1  1	5	["08:00", "08:01", "08:02", "08:03"]인 경우, "09:00"부터 운행하는데 4명이 서 있기 때문에 콘은 09:00에 와도 탈 수 있다.
import copy

def solution(n, t, m, timetable):

    # timetable = [int(time[:2]) * 60 + int(time[3:5]) for time in timetable]
    # timetable.sort()
    # last_time = (60 * 9) + (n - 1) * t
    # for i in range(n):
    #     if len(timetable) < m:
    #         return '%02d:%02d' % (last_time // 60, last_time % 60)
    #     if i == n - 1:
    #         if timetable[0] <= last_time:
    #             last_time = timetable[m - 1] - 1
    #         return '%02d:%02d' % (last_time // 60, last_time % 60)
    #     for j in range(m - 1, -1, -1):
    #         bus_arrive = (60 * 9) + i * t
    #         if timetable[j] <= bus_arrive:
    #             del timetable[j]

    start_time = 540
    timetable = [int(time[:2]) * 60 + int(time[3:5]) for time in timetable]
    timetable.sort()
    clone_tt = copy.deepcopy(timetable)

    for i in range(n):
        totalCrewNum = 0
        while totalCrewNum < m and len(clone_tt) > 0:  # m이랑 같아질 때까지
            if clone_tt[0] == 1440: #sort했으니까 제일 앞에 애만 보면 됨.
                clone_tt[0] = 1439
            if clone_tt[0] <= start_time: #출발시간보다 일찍 왔으면
                totalCrewNum += 1 #타세요
                del clone_tt[0]
            else: #다음 크루가 현재 버스의 출발시간보다 늦게 왔다면
                break;
        start_time += t  # 지금 버스 출발시간에 t만큼 더해줌

    if totalCrewNum < m:
        answer = '%02d:%02d'%((start_time - t)/60,(start_time - t)%60)
    else:
        last_time = timetable[-1] - 1
        answer = '%02d:%02d'%(last_time/60,last_time%60)
    print(answer)

solution(1,	1,	5,	["08:00", "08:01", "08:02", "08:03"])
