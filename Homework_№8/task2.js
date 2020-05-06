let getArea = (number) => {
    if (typeof number ==='number'){
     number = Math.pow(number, 2);
     number = document.write(`${number}<span><i>пi</i></span> cm<span>&#178;</span>`)
}
     else if(number==null){
     number =  document.write('Будь ласка, введіть радіус!')
}
     else if (typeof number!='number'){
     number = document.write('Повинно бути числове значення')
}

return number
}
getArea(56)
