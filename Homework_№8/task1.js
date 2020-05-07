
getDecimal = function(x) {
     let n = parseInt(x);
     return console.log(((x - n).toFixed((""+x).length - (""+n).length-1 )));
 }

 getDecimal(67.897)
