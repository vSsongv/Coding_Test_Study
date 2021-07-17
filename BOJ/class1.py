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

# https://www.acmicpc.net/problem/2920[음계]
# import sys
#
# note = sys.stdin.readline().split()
#
# if note[0] == "1":
#   flag = 1
# elif note[0] == "8":
#   flag = 2
# else:
#   flag = 0
#   print("mixed")
#
# if flag != 0:
#   for i in range(8):
#     if flag == 1:
#       if note[i] == str(i+1): #1부터 순서대로
#         continue
#       else:
#         print("mixed")
#         flag = 0
#         break
#     else:
#       if note[i] == str(8-i): #8부터 순서대로인지
#         continue
#       else:
#         flag = 0
#         print("mixed")
#         break;
#
# if flag == 1:
#   print("ascending")
# elif flag == 2:
#   print("descending")

# https://www.acmicpc.net/problem/3052 [나머지]
# mods = []
# for _ in range(10):
#     n = int(input())
#     m = n % 42
#
#     if m not in mods:
#         mods.append(m)
#
# print(len(mods))

# https://www.acmicpc.net/problem/8958 [OX퀴즈]
# num = int(input())
#
# for _ in range(num):
#     cnt = 0
#     score = 0
#     ox_list = list(str(input().split()))
#     for ox in ox_list:
#         if ox == 'O':
#             cnt += 1
#             score += 1*cnt
#         else:
#             cnt = 0
#
#     print(score)

# https://www.acmicpc.net/submit/10951/30414786 [A+B -4]
# while True:
#     try:
#         f, s = map(int, input().split())
#     except:
#         break
#     print(f+s)

# https://www.acmicpc.net/submit/10952/30414837 [A+B -5]
# while True:
#     f, s = map(int, input().split())
#     if f == 0 and s == 0:
#         break
#     print(f+s)

# https://www.acmicpc.net/problem/11720 [숫자의 합]
# n = input()
# print(sum(map(int,input())))

# https://www.acmicpc.net/problem/10809 [알파벳 찾기]
# word = input()
# alphabet = list(range(97,123))  # 아스키코드 숫자 범위
#
# for x in alphabet :
#     print(word.find(chr(x)))

# https://www.acmicpc.net/problem/10818 [최소 최대]
# n = int(input())
# numbers = list(map(int,input().split()))
# print(min(numbers), max(numbers), end='')

# https://www.acmicpc.net/problem/10871 [x보다 작은 수]
# import sys
# N, X = map(int,sys.stdin.readline().split())
#
# numbers = list(map(int,input().split()))
#
# for n in range(N):
#     if numbers[n] < X:
#         print(numbers[n], end=' ')


