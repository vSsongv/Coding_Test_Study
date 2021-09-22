# Q.1
import math

def lcm(x,y):
    result = (x*y)//math.gcd(x,y)
    return result

def solution(n, m):
    answer = []
    answer.append(math.gcd(n,m))
    answer.append(lcm(n,m))
    return answer

# Q.2
def solution(s):
    return int(s)