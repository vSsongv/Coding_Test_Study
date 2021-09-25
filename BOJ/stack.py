# https://www.acmicpc.net/problem/10828 [스택]

class Stack:
    def push(self, num, stack):
        stack.append(num)

    def pop(self, stack):
        if len(stack) == 0:
            return -1
        return stack.pop(len(stack)-1)

    def size(self, stack):
        return len(stack)

    def empty(self, stack):
        if len(stack) != 0:
            return 0
        return 1

    def top(self, stack):
        if len(stack) == 0:
            return -1
        return stack[-1]

import sys

n = int(input())

Stack = Stack()
stack = []

for _ in range(n):
    order = list(map(str,sys.stdin.readline().split()))
    if order[0] == 'push':
        Stack.push(order[1], stack)
    elif order[0] == 'pop':
        print(Stack.pop(stack))
    elif order[0] == 'top':
        print(Stack.top(stack))
    elif order[0] == 'size':
        print(Stack.size(stack))
    elif order[0] == 'empty':
        print(Stack.empty(stack))