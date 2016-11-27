function era(n) {
  p = [];
  for (var i = 0; i <= n; i++) {
    p[i] = 1;
  }

  r = Math.round(Math.sqrt(n));
  for(var i = 2; i <= r; i++) {
    if(p[i]) {
      for(var j=i*i; j < n; j=j+i) {
        p[j] = 0;
      }
    }
  }
  return p;
}

console.log(era(1000000).toString());
