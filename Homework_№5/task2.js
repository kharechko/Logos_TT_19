
function isPrime(num) {
   if (num==1){
       return console.log("Це складне число")
   }
   else if (num<=3){
       return console.log("Це просте число")
   }
   else if (num%2==0||num%3==0){
    return console.log('Це складне число')
   }
   else{
       return console.log("Це просте число")
   }
}
isPrime(12)