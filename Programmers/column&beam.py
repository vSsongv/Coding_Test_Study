# https://programmers.co.kr/learn/courses/30/lessons/60061?language=python3 [기둥과 보 설치]

def solution(n, build_frame):
    answer = []
    built_dict = {}

    for step in build_frame:
        if (step[3] == 1):  # when build
            if ((step[0],step[1]) in built_dict):  # built before
                if (step[2] == 0):  # is colum
                    if (step[1] != 0):  # if location is not floor
                        if (built_dict[(step[0],step[1])].includes(1)):  # beam has to be therd
                            built_dict[(step[0],step[1])].append(0)  # if there is beam, can bulid
                        else: #if not beam there, fail
                            built_dict[(step[0],step[1])] = []
                    else:  # if floor
                        continue
                else:  # is beam
                    built_dict[(step[0],step[1])] = step[2]
            else:  # first bulid
                built_dict[(step[0],step[1])] = [step[3]]  # appen new col

        else:  # when delete
            built_dict[(step[0],step[1])] = step[2]
        print(built_dict)

    return answer