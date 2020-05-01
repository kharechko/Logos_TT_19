
function getGeo(number, mult){
    for ( let i=1, step1=1,result=1, suma=0; i<=number; i++, step1=step1*mult, result=step1){
       document.write(result);
     }
    }
    getGeo(5, 2)
