# https://www.acmicpc.net/problem/9237 [이장님 초대]
import sys

num = int(input())
time_list = list(map(int, sys.stdin.readline().split()))
time_list.sort(reverse=True) # 내림차순으로 정렬해주기

for i in range(num):
    time_list[i] = i + 1 + time_list[i] #나무를 심는 날 + 나무가 자라는 데 걸리는 시간이 다 자라는 시간임.

print(max(time_list)+1);