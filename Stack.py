# https://www.acmicpc.net/problem/10828 [스택]

class Stack:
    def push(self, num, stack):
        stack.append(num)

    def pop(self, num, stack):
        stack.pop(num)

    def size(self, stack):
        return len(stack)

    def empty(self, stack):
        if len(stack) != 0:
            return 0
        else:
            return 1

    def top(self, stack):
        if len(stack) == 0:
            return -1
        else:
            return stack[-1]

Stack = Stack()
stack = []

Stack.push(3,stack)
Stack.push(2,stack)
Stack.push(1,stack)
print(Stack.top(stack))