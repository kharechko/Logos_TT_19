
 let number =+prompt('enter the first value please');
 let num2=+prompt('enter the second value please');
 function arePrimes(num1, num2){
 for(let i=num1; i<=num2; i++){
     let devisableCount = 2;
         for(let x=0; x<=i/2; x++){
             if(i !== 1 && i !== 0 && i !== x){
                 if(i%x == 0){
                    devisableCount++;
                  }
             }
         }
     if(devisableCount == 3){
         console.log(i);
     }
 }
 }
 arePrimes(number, num2)
// let arePrime=(start, end)=>{
// for (let i=start; i<=end; i++){
//     let count =0;
//     for (let j=2; j<i; j++){
//         if(i%j){continue;}
//         count+=1;

//     }
//     if (!count) console.log(i)
// }
// }
// let start=+prompt('Please enter a value for number one');
//  let end=+prompt('Please enter a value for number two');
// arePrime(start, end);
