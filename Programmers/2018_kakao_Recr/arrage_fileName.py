# https://programmers.co.kr/learn/courses/30/lessons/17686 [파일명 정렬]

import re

def solution(files):
    splited = [re.split("([0-9]+)", file) for file in files] #split by number
    sortedFiles = sorted(splited, key=lambda point: (point[0].lower(), int(point[1]))) #sort by two keys.(name, num)

    return [''.join(fileName) for fileName in sortedFiles] #join all values
