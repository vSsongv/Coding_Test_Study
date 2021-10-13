# https://www.acmicpc.net/problem/9237 [이장님 초대]
import sys

num = int(input())
time_list = list(map(int, sys.stdin.readline().split()))
time_list.sort(reverse=True) # 내림차순으로 정렬해주기
answer = 2

for i in range(1, num):
    if time_list[i-1] == time_list[i]: answer += 1
    else: answer += (time_list[i-1] - time_list[i])
    print(answer)
answer += time_list[-1]

print(answer)