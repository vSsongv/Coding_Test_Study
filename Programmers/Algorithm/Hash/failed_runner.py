# https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3 [완주하지 못한 선수]
# HASH

def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    completion.append("1")
    
    for p in range(len(participant)):
        if participant[p] != completion[p]:
            return participant[p]

# collections과 Counter를 이용한 풀이
import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0] #list로 형변환 중요
