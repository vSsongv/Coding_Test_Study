function solution(atmos) {
  var answer = -1;
  let date = 0;
  let mask = 0;
  let continued = 0;

  atmos.forEach((atmo) => {
    continued += 1;
    const [dust, real_dust] = atmo;
    if (continued > 2) {
      //2일 이내 재사용 가능
      if (date > 2) { // 쓰던 게 2일 넘겼으면
        if (dust >= 151 && real_dust >= 76) mask += 1; //마스크 하나 꺼내야됨
        else if (dust >= 81 || real_dust >= 36) {
            
        }
      }
    } else {
      //2일 지나면 재사용 못 함
    }
    if (dust >= 151 && real_dust >= 76) mask += 1;
    else if (dust >= 81 || real_dust >= 36) {
      if (date > 2) {
        mask += 1;
        date = 1;
      } else {
        mask += 1;
        date += 1;
      }
    }
  });
  return answer;
}
