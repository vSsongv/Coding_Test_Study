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

Stack = Stack()
stack = []

Stack.push(3,stack)
Stack.push(2,stack)
Stack.push(1,stack)
print(Stack.top(stack))