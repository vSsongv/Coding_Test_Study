# https://www.acmicpc.net/problem/2609 [최소공배수와 최대공약수]

import sys

m,n = map(int,sys.stdin.readline().split())

def gcd(m,n):
    if m < n:
        m, n = n, m
    if m % n == 0:
        return n
    else:
        return gcd(n, m%n)

GCD = gcd(m,n)

def lcm(m,n):
    return int(m*n/GCD)

LCM = lcm(m,n)

print(GCD, LCM)