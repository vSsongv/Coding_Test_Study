# https://www.acmicpc.net/problem/1978 [소수 찾기]

def chechPrime(number):
    if number == 1:
        return False
    elif number == 2:
        return True
    else:
        i = 2
        while i * i <= number:
            if number % i == 0:
                return False
            i += 1
        return True

num = int(input())
arr = list(map(int, input().split()))

answer = 0

for i in range(num):
    if(chechPrime(arr[i])): 
        print(arr[i])
        answer += 1

print(answer)