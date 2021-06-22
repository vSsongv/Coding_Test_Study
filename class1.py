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

# https://www.acmicpc.net/problem/2475
# a,b,c,d,e = (map(int, input().split()))
# verNum = (a*a + b*b + c*c + d*d + e*e)%10
# print(verNum)