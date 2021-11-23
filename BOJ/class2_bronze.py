# https://www.acmicpc.net/problem/4153 [직각삼각형]
# import sys
#
# while True:
#     triangles = list(map(int, sys.stdin.readline().split())) #리스트에 넣은 후
#     triangles.sort() #소팅한다. sort()는 본체의 list를 정렬해서 반환하고, sorted는 정렬한 새로운 list를 반환한다.
#     if triangles[0] == 0:
#         break
#     elif ((triangles[0]**2) + (triangles[1]**2)) == (triangles[2]**2): #소팅하면 제일 큰게 마지막 idx를 가진다.
#         print("right")
#     else:
#         print("wrong")

# https://www.acmicpc.net/problem/1920 [수 찾기]
# 리스트의 in연산자를 통한 포함 여부의 시간 복잡도는 O(N)
# 이분 탐색의 시간 복잡도는 O(logN)
# Set과 Dictionary의 in연산을 통한 포함 여부 확인의 시간 복잡도는 O(1)
# 해당 집합에 포함되는지 여부만 확인하면 되므로 Set 자료형을 사용해도 충분
# import sys
#
# nothing = int(input())
# base_list = set(map(int, sys.stdin.readline().split()))
# num = int(input())
# target_list = list(map(int, sys.stdin.readline().split()))
#
# for i in target_list:
#     if i in base_list:
#         print('1')
#     else:
#         print('0')

# https://www.acmicpc.net/problem/2798 [블랙잭]
# import sys
#
# N,M = map(int,sys.stdin.readline().split())
# cards = list(map(int, sys.stdin.readline().split()))
# sum = 0
#
# for i in range(N-2):
#     for j in range(i+1, N-1):
#         for k in range(j+1, N):
#             if cards[i]+cards[j]+cards[k] <= M and cards[i]+cards[j]+cards[k] > sum:
#                 sum = cards[i]+cards[j]+cards[k]
# print(sum)

# https://www.acmicpc.net/problem/11050 [이항 계수]
# import sys

# N,K = map(int,sys.stdin.readline().split())
# top = 1
# bottom = 1
# minus = 1
# for n in range(N,0,-1):
#     top *= n
# for k in range(K,0,-1):
#     bottom *= k
# for m in range(N-K,0,-1):
#     minus *= m

# print(int(top / (bottom * minus)))

# https://www.acmicpc.net/problem/10250 [ACM 호텔]

import sys
n = int(input())

for i in range(n):
    H, W, N  = map(int,sys.stdin.readline().split())
    num = N / H + 1
    floor = N % H
    if N % H == 0:  # h의 배수이면,
        num = N/H
        floor = H
    print(int(floor*100+num))


