# https://programmers.co.kr/learn/courses/30/lessons/17678[셔틀 버스]

#09:00부터 n회 t분 간격으로, m명이 탈 수 있다.
# n  t	m	timetable	이
# 1  1	5	["08:00", "08:01", "08:02", "08:03"]인 경우, "09:00"부터 운행하는데 4명이 서 있기 때문에 콘은 09:00에 와도 탈 수 있다.

def solution(n, t, m, timetable):
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

    start_time = H_to_M("09:00")
    timetable.sort()  # 먼저 timetable내부 값들 sort
    bus_timetable = []

    for i in range(n):
        bus_timetable.append(start_time + t * i) #버스의 timetable생성

    for time in timetable:
        if H_to_M(time) <= bus_timetable

    answer = ''
    if n == 1 and len(timetable) < m : #1대밖에 안 오는데 줄서있는 크루원 수보다 버스 최대 인원이 적으면 9시에 와도 됨
        answer = start_time

    return answer

solution(2, 10, 2, 	["09:10", "09:09", "08:00"])