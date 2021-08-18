# https://programmers.co.kr/learn/courses/30/lessons/17678[셔틀 버스]

#09:00부터 n회 t분 간격으로, m명이 탈 수 있다.
# n  t	m	timetable	이
# 1  1	5	["08:00", "08:01", "08:02", "08:03"]인 경우, "09:00"부터 운행하는데 4명이 서 있기 때문에 콘은 09:00에 와도 탈 수 있다.
def solution(n, t, m, timetable):
    answer = ''
    def H_to_M(time): #시간을 분으로 바꾸는 함수
        H,M = map(int, time.split(":"))
        return H * 60 + M

    def M_to_H(minute):#분을 시간으로 바꾸는 함수
        H,M = divmod(minute, 60)
        if H < 10:
            H = "0" + str(H)
        if M < 10:
            M = "0" + str(M)
        return str(H) + ":" + str(M)

    start_time = H_to_M("09:00") #분으로 바꾸고
    timetable.sort()  # 먼저 timetable내부 값들 sort
    last_crew = 0

    for i in range(n): #버스는 n번 오기때문에.
        totalCrewNum = 0
        while totalCrewNum < m and len(timetable) > 0:  # m이랑 같아질 때까지
            if H_to_M(timetable[0]) <= start_time: #출발시간보다 일찍 왔으면
                totalCrewNum += 1 #타세요
                last_crew = H_to_M(timetable[0]) #마지막으로 탄 크루원
                del timetable[0]
            else: #다음 크루가 현재 버스의 출발시간보다 늦게 왔다면
                break;
        start_time += t  # 지금 버스 출발시간에 t만큼 더해줌

    if totalCrewNum < m:
        answer = M_to_H(start_time-t)
    else:
        answer = M_to_H(last_crew - 1) #마지막으로 탄 크루원 보다는 1분 일찍 와야징
    
    return answer

solution(1,	1,	5,	["08:00", "08:01", "08:02", "08:03"])
