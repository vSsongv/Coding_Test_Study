# https://www.acmicpc.net/problem/4673 [셀프 넘버]

def calculation(num):
    Sum = 0
    origin = num
    while(num > 0):
        Reminder = num % 10
        Sum = Sum + Reminder
        num = num //10
    Sum = origin + Sum #처음 숫자와 각 자리수의 합의 총합
    return Sum

self_num = []
non_self_num = []
for i in range(1,10000,1): 
    result = calculation(i)
    non_self_num.append(result) #일단 생성된 num은 non_self_num배열에 append.
    if i not in non_self_num: # i가 non_self_num에 없으면 i는 self_num임.
        self_num.append(i)
    else:
        pass

for sn in range(len(self_num)):
    print(self_num[sn])
