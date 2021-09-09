// https://programmers.co.kr/learn/courses/30/lessons/17683 [방금그곡]

function changeFlatNote(note) {
    note = note.replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");
    return note
}

function solution(m, musicinfos) {
    const getMinutes = time => time.substr(0, 2) * 60 + +time.substr(3);
    var answer = "(None)";
    let info = [];
    let playTime = '';
    for(let i = 0; i < musicinfos.length; i++) {
        info = musicinfos[i].split(',');
        info[1] = getMinutes(info[1]) - getMinutes(info[0]); //save play time
        info.shift();
        info[2] = changeFlatNote(info[2]); //change # to lowercase
        
        if(info[2].length != info[0]) {
            let playedNote = '';
            let j = 0;
            let c = 0;
            while(j != info[0]) {
                playedNote += info[2].substr(c,1);
                c = (c == info[2].length-1) ? 0 : c + 1;
                j++;
            }
           info[2] = playedNote; //save played code
        }
        m = changeFlatNote(m); //change # to lowercase
        if(info[2].includes(m)) { //m is in current music
            if(answer) { //same note again
                if(info[0] > playTime) {
                    playTime = info[0]; //update playtime and answer
                    answer = info[1];
                }
            }
            else { //first matching music
                playTime = info[0];
                answer = info[1];
            }
        }
    }
    return answer;
}