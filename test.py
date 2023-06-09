from sys import stdin
word = input('입력')

wordNum = len(word) + 2
firstArrow = ''
lastArrow = ''
blankWord = ''

for i in range(0, wordNum):
    if i % 2 == 0:
        firstArrow += '<'
        lastArrow += '>'
    else: 
        firstArrow += '>'
        lastArrow += '<'

print(firstArrow)
print('*'+word+'*')
print('*'+word[0] + ' '*(len(word) - 2) + word[len(word)-1] +'*')
print(lastArrow)