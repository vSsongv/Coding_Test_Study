# https://programmers.co.kr/learn/courses/30/lessons/60061?language=python3 [기둥과 보 설치]

def check(answer):
    for x, y, what in answer:
        if what == 0: #column
            if y == 0 or [x-1, y, 1] in answer or [x, y, 1] in answer or [x, y-1, 0] in answer: #column rule(on floor, on other col, on part of beam)
                continue
            else: return False
        else: #beam
            if [x,y-1,0] in answer or [x+1, y-1, 0] in answer or ([x-1, y, 1] in answer and [x+1, y, 1] in answer): #beam rule(on other col, connect with other beam)
                continue
            else: return False
    return True

def solution(n, build_frame):    
    answer = []
    for frame in build_frame:
        x,y,what,how = frame
        
        if how == 1: #build
            answer.append([x,y,what])
            if check(answer) is False:
                answer.remove([x,y,what])
        else: #delete
            answer.remove([x,y,what])
            if check(answer) is False:
                answer.append([x,y,what])
        
        answer.sort()

    return answer
