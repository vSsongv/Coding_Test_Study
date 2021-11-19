# https://www.acmicpc.net/problem/9012 [괄호]
n = int(input())

for _ in range(n):
    right, left = 0, 0
    bracket = input()
    if bracket[0] == ')':
        print('NO')
        continue
    for i in range(len(bracket)):
        if bracket[i] == ')':
            right += 1
        else:
            left += 1
        if right > left:
            break
    if right-left == 0:
        print('YES')
    else:
        print('NO')
