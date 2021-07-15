import java.util.Arrays;
 
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int[] temp = {};
        for(int i = 0; i < commands.length; i++){
            temp = Arrays.copyOfRange(array, commands[i][0]-1, commands[i][1]);
            Arrays.sort(temp);
            answer[i] = temp[commands[i][2]-1];
        }
        return answer;
    }
}

//아래는 python code
def solution(array, commands):
    answer = [sorted(array[command[0]-1:command[1]])[command[2]-1] for command in commands]
    
    return answer

