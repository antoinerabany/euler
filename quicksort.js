function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomArray(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array[i] = getRandomInt(0, n);
  }
  return array;
}

function quicksort(array, first, last) {
  var pivot;
  if (first < last) {
    pivot = getRandomInt(first, last);
    pivot = partition(array, first, last, pivot);
    quicksort(array, first, pivot-1);
    quicksort(array, pivot+1, last);
  }
  return array;
}

function partition(array, first, last, pivot) {
  swap(array, pivot, last);
  j = first;
  for (var i = first; i < last; i++) {
    if (array[i] <= array[last]) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, j, last);
  return j;
}

function swap(array, i, j) {
  var a = array[j];
  array[j] = array[i];
  array[i] = i;
}

var ra = randomArray(40);
var qs = quicksort(ra, 0, ra.length-1);
console.log("[" +qs+ "]");
