var s = [7, 1, 1900];
var res = 0;
while (s[2] < 2001) {
  s = nextSunday(s);
  if (s[2] > 1900 && s[0] === 1) {
    res++;
  }
}
console.log(res);

function nextSunday(s) {
  s[0]+= 7;
  dim = dayInMonth(s[1], s[2]);
  if (s[0] > dim) {
    s[0] %= dim;
    s[1]++;
    if (s[1]>12) {
      s[1] = 1;
      s[2]++;
    }
  }
  return s;
}

function dayInMonth(month, year) {
  if ([1,3,5,7,8,10,12].indexOf(month) !== -1) {
    return 31;
  } else if ([4,6,9,11].indexOf(month) !== -1) {
    return 30;
  } else if (month == 2) {
    if (year % 4 === 0 ) {
      return 29
    } else {
      return 28;
    }
  } else {
    throw "Mois invalide.: " + month;
  }
}
