var BigNumber = require('bignumber.js');

function fib(n) {
  var a = [new BigNumber(1), new BigNumber(1)];
  for (var i = 2; i < n; i++) {
    a[i%2] = a[0].plus(a[1]);
  }
  return a[(n+1)%2];
}

function fibDigit(n) {
  var a = [new BigNumber(1), new BigNumber(1)];
  var i=2;
  while (a[(i+1)%2].e < n) {
    a[i%2] = a[0].plus(a[1]);
    i++;
  }
  //console.log(a)
  return i;
}
// var f, res = {};
// for (var i = 0; i < 1000; i++) {
//   //f = fib(i).toString().length;
//   //res[f] = res[f] + 1 || 0;
//   console.log(fib(i));
// }
console.log(fib(4782).toString());
//console.log(fibDigit(999));

// function fibDigit(n) {
//   var a = [1, 1];
//   var i = 0;
//   while (a[i]< ) {
//     a[i%2] = a[0] + a[1];
//     i++;
//   }
//   return i;
//   return a[(n+1)%2];
// }
