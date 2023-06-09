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

Queue = Queue()
queue = []

Queue.push(3,queue)
Queue.push(2,queue)
Queue.push(1,queue)
print(Queue.front(queue))