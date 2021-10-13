# https://www.acmicpc.net/problem/2164 [카드2]
import sys
from collections import deque

N = int(sys.stdin.readline())
arr = deque()

for i in range(N):
    arr.append(i+1)

while len(arr) != 1:
    arr.popleft()
    arr.append(arr.popleft())

print(arr[0])

