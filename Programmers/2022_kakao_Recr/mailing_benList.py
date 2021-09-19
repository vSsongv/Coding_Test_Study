# 2022 KAKAO BLIND RECRUITMENT 1번

def solution(id_list, report, k):
    answer = []
    mail = {}
    ben_list = []  # k번이상 신고된 사람들.
    id_dict = {}
    reported_dict = {}  # 신고당한 대상들

    for ID in id_list:
        id_dict[ID] = []  # id가 신고한 대상들
        reported_dict[ID] = 0
        mail[ID] = 0

    for re in report:
        tmp = re.split(' ')
        reporter = tmp[0]
        reported = tmp[1]
        if reported not in id_dict[reporter]:
            id_dict[reporter].append(reported)

    for re in id_dict:
        for ed in id_dict[re]:
            reported_dict[ed] += 1

    for key, val in reported_dict.items():
        if val >= k:
            ben_list.append(key)

    for ben in ben_list:
        for re, ed in id_dict.items():
            if ben in ed:
                mail[re] += 1

    for val in mail.values():
        answer.append(val)

    return answer