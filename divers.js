function squareInt(m, n) {
  if (m>=0 && n >= m) {
    return Math.floor(Math.sqrt(n)) - Math.floor(Math.sqrt(m)) + 1
  }
}

//console.log(squareInt(4, 17));

function firstUnique(sortedA) {
  var last = false;
  if (sortedA[0] !== sortedA[1]) {
    return sortedA[0];
  }
  for (var i = 1; i < sortedA.length - 1; i++) {
    if (sortedA[i] !== sortedA[i-1] && sortedA[i] !== sortedA[i+1]) {
      return sortedA[i];
    }
  }
  if (sortedA[sortedA.length - 2] !== sortedA[sortedA.length - 1]) {
    return sortedA[sortedA.length - 1];
  }
  return -1;
}

console.log(firstUnique([1,1,2,2,3,4]));
