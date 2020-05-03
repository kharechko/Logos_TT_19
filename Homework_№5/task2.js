
function isPrime(num) {
    if(num < 2) return false;
    if(num == 2) return console.log(num);
    for(var i = 2; i < num; i++) {
      if(num % i === 0) return false;
    }
    return console.log(num);
  } 
  isPrime(56)
