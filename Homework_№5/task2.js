
// function isPrime(num) {
//     if(num < 2) return false;
//     if(num == 2) return console.log(num);
//     for(var i = 2; i < num; i++) {
//       if(num % i === 0) return false;
//     }
//     return console.log(num);
//   } 
//   isPrime(56)
function isAPrime(num){
    let counter = 0;
    for (k = 1; k <= num; k++) {
      if (num % k == 0) {
        counter  = counter  + 1;
       }
   }
  if (counter == 2) {
    return console.log(num);
  }else{
   return false;
  }
}
isAPrime(90)
