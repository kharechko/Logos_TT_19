
let getFibonacci=(number)=>{
for ( let i=0, j=1, k=0,fib=1; i<number; i++, fib=j+k, k=j, j=fib){
    console.log(fib)
}
}
getFibonacci(55)