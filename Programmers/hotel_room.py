# https://programmers.co.kr/learn/courses/30/lessons/64063

k = 10
room_number	= [1,3,4,1,3,1]
result = [1,3,4,2,5,6]

def solution(k, room_number):
    answer = []

    rooms = {}
    for i in range(1,k+1,1):  #k개의 방 num과, 선택되었는지 값을 가지고 있는 dict 생성
        rooms[i] = 0

    for i,val in enumerate(room_number):
        if val not in answer: #원하는 방이 빈 방이면
            rooms[val] = 1 #value를 1로 바꾸고,
            answer.append(val) #해당 room_number를 answer에 append.
        else:
            for j in range(1, len(rooms), 1): #원하는 방이 빈 방이 아니면 rooms를 돌면서
                if j > val: #원하는 방 num보다 크면서,
                    if rooms[j] != 1:  #비어있는 가장 작은 방을 찾고
                        rooms[j] = 1 #값 1로 바꾸고
                        answer.append(j) #해당 방 넘버 append.
                        break;

    return answer

rN = solution(k, room_number)
print(rN)
