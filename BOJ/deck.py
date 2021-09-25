# https://www.acmicpc.net/problem/10866 [덱]
class Deck:
    def push_front(self, num, deck):
        deck.insert(0,num)

    def push_back(self, num, deck):
        deck.append(num)

    def pop_front(self, deck):
        if len(deck) == 0:
            return -1
        return deck.pop(0)

    def pop_back(self, deck):
        if len(deck) == 0:
            return -1
        return deck.pop(len(deck)-1)

    def size(self, deck):
        return len(deck)

    def empty(self, deck):
        if len(deck) != 0:
            return 0
        return 1

    def front(self, deck):
        if len(deck) == 0:
            return -1
        return deck[0]

    def back(self, deck):
        if len(deck) == 0:
            return -1
        return deck[-1]

import sys

n = int(input())

Deck = Deck()
deck = []

for _ in range(n):
    order = list(map(str,sys.stdin.readline().split()))
    if order[0] == 'push_front':
        Deck.push_front(order[1], deck)
    elif order[0] == 'push_back':
        Deck.push_back(order[1], deck)
    elif order[0] == 'pop_front':
        print(Deck.pop_front(deck))
    elif order[0] == 'pop_back':
        print(Deck.pop_back(deck))
    elif order[0] == 'front':
        print(Deck.front(deck))
    elif order[0] == 'back':
        print(Deck.back(deck))
    elif order[0] == 'size':
        print(Deck.size(deck))
    elif order[0] == 'empty':
        print(Deck.empty(deck))