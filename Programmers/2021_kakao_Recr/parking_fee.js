//2022 KAKAO BLIND RECRUITMENT 3번

function solution(fees, records) {
    let basicTime = fees[0];
    let basicFee = fees[1];
    let unitTime = fees[2];
    let unitFee = fees[3];
    let parking = {};
    var answer = [];
    
    const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);
    
    let lastOutTime = getTime('23:59');
    
    for(let i = 0; i < records.length; i++) {
        let info = []
        info = records[i].split(' ');
        let time = info[0];
        let carNum = info[1];
        let status = info[2];
        
        if(!(carNum in parking)) { //init
            parking[carNum] = {};
            parking[carNum]['time'] = getTime(time);
            parking[carNum]['totalTime'] = 0
            parking[carNum]['status'] = status;
            parking[carNum]['fee'] = 0;
        }
        else {
            if(status == 'IN') {
                parking[carNum]['time'] = getTime(time);
                parking[carNum]['status'] = status;
            }
            else { //OUT
                let parkingHour = getTime(time) - parking[carNum]['time'];
                parking[carNum]['totalTime'] += parkingHour;
                parking[carNum]['time'] = 0;
                parking[carNum]['status'] = status;
            }
        }
    }
    for (var car in parking) { 
        if(parking[car]['status'] == 'OUT') {
            if(parking[car]['totalTime'] <= basicTime) parking[car]['fee'] += basicFee;
            else {
                let overTime = parking[car]['totalTime'] - basicTime;
                parking[car]['fee'] += basicFee + (Math.ceil(overTime/unitTime) * unitFee);
            }
        }
        else {
            let parkingHour = lastOutTime - parking[car]['time'];
            if(parking[car]['totalTime'] + parkingHour <= basicTime) parking[car]['fee'] += basicFee;
            else {
                let overTime = (parking[car]['totalTime'] + parkingHour) - basicTime;
                parking[car]['fee'] += basicFee + (Math.ceil(overTime/unitTime) * unitFee);
            }
        }
    }
    let parkingFee = [];
    for(let car in parking) {
        parkingFee.push([car, parking[car]]);
    }

    parkingFee.sort(function(a, b) {
        return a[0] - b[0];
    });
    for (var car in parkingFee) {
        answer.push(parkingFee[car][1]['fee']);
    }
    
    return answer;
}