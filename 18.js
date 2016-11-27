var fs = require('fs');

fs.readFile('triangle.txt', 'utf8', function(err, data) {
  if (err) throw err;
  //console.log(data);
  var a = data.trim().split('\n');
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].split(' ');
    for (var j = 0; j < a[i].length; j++) {
      a[i][j] = parseInt(a[i][j]);
    }
  }
  console.log(longest(a, a.length -1));
});

//ligne i, colonne j
function longest(graph, i){
  if (i === 0){
    return graph[0][0];
  }
  for (var j = 0; j < graph[i].length - 1; j++) {
    graph[i - 1][j] += max(graph[i][j], graph[i][j+1])
  }
  return longest(graph, i-1);
}

function max(a, b){
  if (a > b) {
    return a;
  }
  return b;
}
