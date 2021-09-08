# https://programmers.co.kr/learn/courses/30/lessons/17684?language=python3 [압축]

def solution(msg):
    answer = []
    dictionary = {}

    for i in range(26):
        dictionary[chr(65 + i)] = i + 1  # made dict

    w, c = 0, 0
    while True:
        c += 1
        if msg[w:c + 1] not in dictionary:
            answer.append(dictionary[msg[w:c]])
            dictionary[msg[w:c + 1]] = len(dictionary) + 1  # append dict key & val
            w = c
        if c == len(msg):  # c is last index of msg
            answer.append(dictionary[msg[w:c]])  # append last val
            break

    return answer