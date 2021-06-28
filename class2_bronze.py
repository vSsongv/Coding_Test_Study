# https://www.acmicpc.net/problem/4153 [직각삼각형]
import sys

while True:
    triangles = list(map(int, sys.stdin.readline().split())) #리스트에 넣은 후
    triangles.sort() #소팅한다. sort()는 본체의 list를 정렬해서 반환하고, sorted는 정렬한 새로운 list를 반환한다.
    if triangles[0] == 0:
        break
    elif ((triangles[0]**2) + (triangles[1]**2)) == (triangles[2]**2): #소팅하면 제일 큰게 마지막 idx를 가진다.
        print("right")
    else:
        print("wrong")