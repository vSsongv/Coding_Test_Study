# https://www.acmicpc.net/problem/10816 [숫자 카드2]

import sys

answer = ""
n = int(sys.stdin.readline())
cards = list(map(int, input().split()))
cards.sort()
numHash = {} #숫자별 개수를 저장하기 위한 hash

for card in cards:
    if card in numHash:
        numHash[card] += 1
    else:
        numHash[card] = 1

M = int(sys.stdin.readline())
findCards = list(map(int, input().split()))
for target in findCards:
    if target in numHash:
        answer += str(numHash[target]) + " "
    else:
        answer += "0 "
print(answer)
