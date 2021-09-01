def solution(n, build_frame):
    answer = []
    bulit_dict = {}
    town = [[0 for col in range(n)] for row in range(n)]

    for step in build_frame:
        if (step[3] == 1):  # when build
            if ([[step[0]], [step[1]]] in bulit_dict):  # built before
                if (step[2] == 0):  # is colum
                    if (step[1] != 0):  # if location is not floor
                        if (bulit_dict[[step[0]], [step[1]].includes(1)]):  # beam has to be therd
                            bulit_dict[[step[0]], [step[1]]].append(0)  # if there is beam, can bulid
                        else: #if not beam there, fail
                            continue
                    else:  # if floor

                else:  # is beam
                    bulit_dict[step[0], step[1]] = step[2]
            else:  # first bulid
                bulit_dict[step[0], step[1]] = [step[3]]  # appen new col



        else:  # when delete
            bulit_dict[step[0], step[1]] = step[2]

    return answer