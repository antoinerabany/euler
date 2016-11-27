var fs = require('fs');

var weight = {'A':1, 'B':2, 'C':3, 'D': 4, 'E':5, 'F': 6, 'G':7, 'H':8,'I':9,
'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,
'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26};

fs.readFile('names.txt', 'utf8', function(err, data) {
  if (err) throw err;
  //console.log(data)
  var a ;//= data.replace('"', '');
  a = data.split('","')
  a[0] = a[0].replace('"', '');
  a[a.length-1] = a[a.length-1].replace('"', '');
  a.sort();
  //console.log(a);
  var res = 0;

  for (var i = 0; i < a.length; i++) {
    var k = 0
    for (var j = 0; j < a[i].length; j++) {
      //console.log(a[i][j]);
      k += weight[a[i][j]];
      if(isNaN(k)){
        console.log(a)
      }
    }
    res += k * (i+1);
  }
  console.log(res);
});
