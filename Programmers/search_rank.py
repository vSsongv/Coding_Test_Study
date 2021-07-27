# https://programmers.co.kr/learn/courses/30/lessons/72412 [순위 검색]
# https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/

info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100",
         "- and - and - and - 150"]


def makeDict(info):
    option_dict = {}
    for p in info: #info를 돌면서
        tmp = p.split() #자르고
        character = tmp[0:4] #점수 앞부분
        score = int(tmp[-1]) #점수

        for i in range(4): #16개의 경우 생성
            print(i)
            for j in range(4):
                key = character[i][j]


        # print(character)


def solution(info, query):
    answer = []
    makeDict(info)

    return answer

solution(info, query)