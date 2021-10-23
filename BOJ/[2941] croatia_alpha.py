# https://www.acmicpc.net/problem/2941 [크로아티아 알파벳]

import sys
alpha = sys.stdin.readline()

croatia_alpha = {
    "c=": 1,
    "c-": 1,
    "d-": 1,
    "lj": 1,
    "nj": 1,
    "s=": 1,
    "z=": 1
}

length = len(alpha)-1

tmp = ""
for a in alpha:
    tmp += a
    if len(tmp) == 3:
        if tmp == "dz=":
            length -= 2
            tmp = ""
        else:
            if tmp[-1] == "z":
                tmp = "" + "z"
            else:
                tmp = ""
    elif len(tmp) >= 2:
        if tmp == "dz":
            continue
        elif tmp in croatia_alpha:
            length -= croatia_alpha[tmp]
            tmp = ""
        else:
            tmp = ""+tmp[-1]

print(length)

a = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
alpha = input()
for t in a:
    alpha = alpha.replace(t, '*')

print(len(alpha))