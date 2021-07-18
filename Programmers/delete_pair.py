# https://programmers.co.kr/learn/courses/30/lessons/12973 [짝지어 제거하기]

def solution(s):
    string = []

    if len(s) % 2 != 0:  # 홀수개면 어차피 안 됨
        return 0
    else:
        for c in s:
            if len(string) > 0 and string[-1] == c:  # string 배열에 c가 있으면 짝을 지을 수 있으니까
                string.pop()  # 바로 없애줌
            else:
                string.append(c)  # 일단 string배열에 집어넣고

    if string:  # 배열에 남은 놈이 있음. 실패
        return 0
    else:  # 빈배열이면 짝짓기 성공
        return 1

solution('baabaa')