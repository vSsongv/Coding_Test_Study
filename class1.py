# https://www.acmicpc.net/problem/1157
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

# https://www.acmicpc.net/problem/1546
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

# https://www.acmicpc.net/problem/2439
# num = int(input())
#
# for i in range(1,num+1,1):
#     for j in range(num-i):
#         print(' ', end='')
#     print("*"*i)

# https://www.acmicpc.net/submit/2562
# numbers = []
# for _ in range(9):
#     number = int(input())
#     numbers.append(number)
#
# maxNum = max(numbers)
# print(maxNum)
# print(numbers.index(maxNum)+1)

# https://www.acmicpc.net/problem/2577
# a = int(input())
# b = int(input())
# c = int(input())
#
# result = list(str(a * b * c))
# for i in range(10):
#     print(result.count(str(i)))

# https://www.acmicpc.net/problem/2675
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