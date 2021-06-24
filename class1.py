# https://www.acmicpc.net/problem/1157 [단어 공부]
# string = input().upper()
# alpha = list(set(string))
#
# cnt_list = []
# for s in alpha:
#     cnt = string.count(s)
#     cnt_list.append(cnt)
#
# if cnt_list.count(max(cnt_list)) > 1:
#     print('?')
# else:
#     max_index = cnt_list.index(max(cnt_list))
#     print(alpha[max_index])

# https://www.acmicpc.net/problem/1546 [평균]
# subNum = int(input())
# scores = list(map(int, input().split()))
#
# maxScore = max(scores)
#
# avg = []
# for s in scores:
#    avg.append((s/maxScore)*100)
#
# print(sum(avg)/subNum)

# https://www.acmicpc.net/problem/2439 [별 찍기2]
# num = int(input())
#
# for i in range(1,num+1,1):
#     for j in range(num-i):
#         print(' ', end='')
#     print("*"*i)

# https://www.acmicpc.net/problem/2562 [최댓값]
# numbers = []
# for _ in range(9):
#     number = int(input())
#     numbers.append(number)
#
# maxNum = max(numbers)
# print(maxNum)
# print(numbers.index(maxNum)+1)

# https://www.acmicpc.net/problem/2577 [숫자의 개수]
# a = int(input())
# b = int(input())
# c = int(input())
#
# result = list(str(a * b * c))
# for i in range(10):
#     print(result.count(str(i)))

# https://www.acmicpc.net/problem/2675 [문자열 반복]
# tn = int(input())
#
# codes = []
#
# for n in range(tn):
#     repeatNum, string = input().split()
#     sentence = []
#     for i in range(len(string)):
#         sentence.append(string[i]*int(repeatNum))
#
#     code = "".join(sentence)
#     codes.append(code)
#
#     print(codes[n])

# https://www.acmicpc.net/problem/2751 [수 정렬하기2]
# import sys
# n = int(input())
#
# numbers = [int(sys.stdin.readline()) for _ in range(n)]
#
# for i in sorted(numbers):
#     sys.stdout.write(str(i)+'\n')

# https://www.acmicpc.net/problem/2884 [45분 빠르게 설정하는 알람 시계]
# import sys
# H,M = map(int,sys.stdin.readline().split())
#
# if M < 45:
#     M += 15
#     if H == 0:
#         H = 24
#     H -= 1
# else:
#     M -= 45
#
# print(str(H), str(M))

# https://www.acmicpc.net/problem/2908 [숫자 반대로 읽는 상수]
# import sys
#
# f, s = sys.stdin.readline().split()
# f = int(''.join(reversed(f)))
# s = int(''.join(reversed(s)))
#
# if f > s:
#     print(str(f))
# else:
#     print(str(s))