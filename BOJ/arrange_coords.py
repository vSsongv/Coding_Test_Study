# https://www.acmicpc.net/problem/11650 [좌표 정렬하기]

num = int(input())
arr = []

for i in range(num):
    x,y = map(int, input().split()) #input split해서 각 x,y점으로
    arr.append([x,y])

arr.sort(key = lambda k : (k[0], k[1]))

for i in range(num):
    print(arr[i][0], arr[i][1])