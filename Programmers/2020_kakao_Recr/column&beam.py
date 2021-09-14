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
            answer.append([x,y,what]) #일단 append한 후, 
            if check(answer) is False: #조건에 부합하는지 확인하고
                answer.remove([x,y,what]) #부합하지 않으면 무시
        else: #delete
            answer.remove([x,y,what])
            if check(answer) is False:
                answer.append([x,y,what])
        
        answer.sort()

    return answer
