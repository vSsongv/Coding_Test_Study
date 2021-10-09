# https://programmers.co.kr/learn/courses/30/lessons/42578 [위장]

def solution(clothes):
    answer = 1
    Type = {}
    for cloth in clothes:
        if cloth[1] in Type:
            Type[cloth[1]] += 1 #개수로 저장
        else:
            Type[cloth[1]] = 1 #개수로 저장

    for n, k in Type.items():
        answer *= (k + 1) #개수+1로 곱해서 조합을 구한 후

    return answer - 1 #전부 안 입는 경우 제외