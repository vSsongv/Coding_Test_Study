# https://www.acmicpc.net/problem/1931 [회의실]

import sys

n = int(sys.stdin.readline())
time_list = [[0]*2 for i in range(n)]

for i in range(n):
    start, end = map(int, input().split())
    time_list[i][0] = start
    time_list[i][1] = end

time_list.sort(key=lambda x:(x[1],x[0]))

answer = 0
end_time = 0
for time in time_list:
    if time[0] >= end_time:
        answer += 1
        end_time = time[1]

print(answer)


    
