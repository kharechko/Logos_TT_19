// function getMax(){
//     console.log(Math.max(arguments.length))
// }
function maxIn(){
    let max=arguments[0];
     for (let i=0; i<arguments.length; i++){
         if (arguments[i]>max){
             max=arguments[i];
         }
     }
     return console.log(max)
}
maxIn(1, 386, 5,9,2, 34)
