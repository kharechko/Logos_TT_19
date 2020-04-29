
 let num1=+prompt('Enter first number')
 let num2=+prompt('Enter second number')
 let result=1;
 if(num2>0){
      for(let i = 1; i <= num2; i++){
          result = result * num1;
     }
  }
  else if(num2<0){
    num2 = -num2
   for(let i = 1; i <= num2; i++){
        result = result * num1
     }
     result = 1/result
  }
   console.log(result)