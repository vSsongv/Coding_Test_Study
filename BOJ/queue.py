# https://www.acmicpc.net/problem/10845 [큐]
class Queue:
    def push(self, num, queue):
        queue.append(num)

    def pop(self, queue):
        if len(queue) == 0:
            return -1
        return queue.pop(0)

    def size(self, queue):
        return len(queue)

    def empty(self, queue):
        if len(queue) != 0:
            return 0
        return 1

    def front(self, queue):
        if len(queue) == 0:
            return -1
        return queue[0]

    def back(self, queue):
        if len(queue) == 0:
            return -1
        return queue[-1]

import sys

n = int(input())

Queue = Queue()
queue = []

for _ in range(n):
    order = list(map(str,sys.stdin.readline().split()))
    if order[0] == 'push':
        Queue.push(order[1], queue)
    elif order[0] == 'pop':
        print(Queue.pop(queue))
    elif order[0] == 'front':
        print(Queue.front(queue))
    elif order[0] == 'back':
        print(Queue.back(queue))
    elif order[0] == 'size':
        print(Queue.size(queue))
    elif order[0] == 'empty':
        print(Queue.empty(queue))