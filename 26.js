// var BigNumber = require('bignumber.js');
// var un = new BigNumber(1000000000);
// for (var i = 0; i < 1000; i++) {
//   console.log(i, un.div(new BigNumber(i)).toString());
// }
var n = 100;
var a = [];
for (var i = 2; i < n; i++) {
  a[i]=1;
}

var b, c, pow;
for (var i = 2; i < 7; i++) {
  console.log("i = " + i);
  pow = Math.pow(10,i);
  for (var j = 2; j < n; j++) {
    if (a[j] == 1) {
      b = pow/j;
      if (Number.isInteger(b)) {
        a[j]=0
      }
      c = Math.trunc(b).toString()
      if (c.length ===  i-1) {
        c = '0' + c;
      }
      console.log(j, c);
    }
  }
}

//Une piste http://mathworld.wolfram.com/MultiplicativeOrder.html
// Et http://mathworld.wolfram.com/DecimalPeriod.html
//Qui dit que la longeur du cycle est inférieure à n-1
