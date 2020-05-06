 let getSqrt = (number) =>{
     if (number<0){
          number = 'Введіть, будь ласка, додатнє число'
      }
       else  if (typeof number == 'number'){
           square = (Math.sqrt(number)).toFixed(1);
           number = `Квадратний корінь з ${number} дорівнює – ${square}`
      }
      else if (number==null){
           number = 'Введіть, будь ласка, число! '
      }
      else if (typeof number!='number'){
          number = 'Повинно бути числове значення'
      }
     
      return console.log(number)
  }
 
  getSqrt()
