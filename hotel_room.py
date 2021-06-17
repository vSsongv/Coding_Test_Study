# https://programmers.co.kr/learn/courses/30/lessons/64063

k = 10
room_number	= [1,3,4,1,3,1]
result = [1,3,4,2,5,6]

def solution(k, room_number):
    answer = []

    rooms = {}
    for i in range(k):  #k개의 방 넘버와, 선택되었는지 값을 가지고 있는 dict 생성
        rooms[i] = 0

    for i, rn in enumerate(room_number):
        if rooms[rn] == 0: #빈 방이면 value를 1로 바꾸고, 해당 room_number를 answer에 append.
            rooms[rn] = 1
            answer.append(rn)
        else:
            for i, checked in enumerate(rooms):
                if rooms[i] != 1:




    return answer

solution(k, room_number)