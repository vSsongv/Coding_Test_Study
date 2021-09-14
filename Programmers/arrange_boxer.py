# https://programmers.co.kr/learn/courses/30/lessons/85002 [복서 정렬하기]

def solution(weights, head2head):
    answer = []
    player = {}
    
    for i in range(len(weights)):
        player[i+1] = {'weight' : weights[i], 'winRate': 0, 'winOver': 0}
        
    for h in range(len(head2head)):
        playerNum = 0
        for r in range(len(head2head[h])):
            if head2head[h][r] != 'N': playerNum += 1
            if head2head[h][r] == 'W':
                if player[r+1]['weight'] > player[h+1]['weight']:
                    player[h+1]['winOver'] += 1
                
        player[h+1]['winRate'] = (head2head[h].count('W') / playerNum) if playerNum else 0
    
    sortedPlayer = sorted(player.items(), key = lambda k: (k[1]['winRate'], k[1]['winOver'], k[1]['weight']), reverse=True)
    
    for boxer in sortedPlayer:
        answer.append(boxer[0])
    return answer
