def solution(weights, head2head):
    playerNum = len(weights)-1
    answer = []
    player = {}
    
    for i in range(len(weights)):
        player[i+1] = {'weight' : weights[i], 'winRate': 0, 'winOver': 0}
        
    for p in range(len(head2head)):
        player[p+1]['winRate'] = head2head[p].count('W') / playerNum
    
    player = sorted(player.items(), key = lambda k: (k[1]['winRate'], k[1]['weight']), reverse=True)
    print(player)
        
    return answer
