function collatz(n, a){
  a.push(n);
  if (n==1) {
    return a;
  }
  if (n % 2 === 0 ){
    return collatz(n/2, a);
  } else {
    return collatz(3*n + 1, a);
  }
}

function collatzLength(n, memory){
  if (n==1) {
    return 1;
  }
  if (memory[n]) {
    return memory[n];
  }
  if (n % 2 === 0 ){
    return collatzLength(n/2, memory) + 1;
  } else {
    return collatzLength(3*n + 1, memory) + 1;
  }
}

function longest(n) {
  var max, indexMax, res = [];

  res[1] = 1;
  max = 1;
  indexMax = 1;
  for (var i = 2; i <= n; i++) {
    res[i] = collatzLength(i, res);
    if (res[i] > max) {
      max = res[i];
      indexMax = i;
    }
  }

  return indexMax;
}


var lg = longest(1000000);
console.log(lg);
//console.log(lg, collatz(lg, []));
