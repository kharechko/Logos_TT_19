
let getGeo=function(number, mult){
        let sum=0;
         let result=1;
      for ( let i=1, step1=1, suma=0; i<=number; i++, step1=step1*mult, result=step1){
        sum+=result; 
     }
         console.log(sum)
    }       
    getGeo(4, 3)

// let getGeo=function(n, q){

//     let suma=(1-(q**n))/(1-q);
//     return console.log(suma)
// }
// getGeo(4,3)
