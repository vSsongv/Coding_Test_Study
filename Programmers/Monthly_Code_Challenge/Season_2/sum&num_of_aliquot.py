# https://programmers.co.kr/learn/courses/30/lessons/77884?language=python3 [약수의 개수와 덧셈]

def get_cnt(n):
    n = int(n)
    divisors = []
    divisors_back = []

    for i in range(1, int(n**(1/2)) + 1):
        if (n % i == 0):
            divisors.append(i)
            if (i != (n // i)):
                divisors_back.append(n//i)
    cnt = len(divisors) + len(divisors_back)
    return cnt

def solution(left, right):
    answer = 0
    for n in range(left,right+1):
        if(get_cnt(n) % 2 == 0): answer += n
        else: answer -= n
    return answer