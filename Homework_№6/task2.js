
// function getGeo(number, mult){
//     for ( let i=1, step1=1,result=1, suma=0; i<=number; i++, step1=step1*mult, result=step1){
//        document.write(result);
//      }
//     }
//     getGeo(5, 2)

let getGeo=function(n, q){

    let suma=(1-(q**n))/(1-q);
    return console.log(suma)
}
getGeo(4,3)
