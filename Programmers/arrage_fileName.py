# https://programmers.co.kr/learn/courses/30/lessons/17686 [파일명 정렬]

import re

def solution(files):
    answer = []
    splited = [re.split("([0-9]+)", file) for file in files]
    sortedFiles = sorted(splited, key = lambda point: (point[0], point[1]))
    print(sortedFiles)
    return answer