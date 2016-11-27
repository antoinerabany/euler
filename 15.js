function fact(n) {
  if (n==1) {
    return  1;
  }
  else {
    return n*fact(n-1)
  }
}

console.time("a");
console.log(fact(40)/(fact(20)*fact(20)));
console.timeEnd("a");
