# https://programmers.co.kr/learn/courses/30/lessons/72412 [순위 검색]
# https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/
# need to solve!
# need to solve using JS

info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100",
         "- and - and - and - 150"]

import re
from itertools import combinations

def makeDict(infos, dict): # make 16(4*4) key
        for p in infos:  # for all info values
            tmp = p.split()  # seperate
            info= tmp[0:4]  # will be keys
            score = int(tmp[-1])  # score = value

            for i in range(5):
                for i in combinations(info, i):
                    key = ''.join(i)
                    if key in dict:
                            dict[key].append(score) #value is score
                    else:
                        dict[key] = []
                        dict[key].append(score) #value is score

        for key in dict.keys():
            dict[key].sort()

        return dict

def lower_bound(nums, target):
    left, right = 0, len(nums)

    while left < right:  # left와 right가 만나는 지점이 target값 이상이 처음 나오는 위치
        mid = int((right + left) / 2)

        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    return right

def solution(info, query):
    answer = []
    dict = {}
    option_dict = makeDict(info, dict)

    for q in query:
        num = 0
        tmp = q.split()  # seperate
        key = tmp[0:-1]  # info
        searchScore = int(tmp[-1])  # target score

        keyInfo = ''.join(key)
        keyInfo = re.sub("and|\-","",keyInfo) # get key from info

        if(keyInfo in option_dict):
            index = lower_bound(option_dict[keyInfo], searchScore)
            num = len(option_dict[keyInfo]) - index

        answer.append(num)

    return answer

print(solution(info, query))