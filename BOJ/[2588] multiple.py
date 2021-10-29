# https://www.acmicpc.net/problem/2588 [곱셈]

import sys

n = int(sys.stdin.readline())
m = sys.stdin.readline()

sum = 0

for i in range(2, -1, -1):
    val = n * int(m[i])
    print(val)
    val = str(val)
    val += '0' * (2 - i)
    sum += int(val)

print(sum)