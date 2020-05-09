
let ask = prompt('');

let getAddress = (str) =>{
  
   let _f = 'http://';
   let _s = 'https://';

   if (str.includes(_f)) slice = str.slice(7);
   
   else if (str.includes(_s)) slice = str.slice(8);

   else slice = 'Address is not defined'

   return console.log(slice);
   

}

getAddress(ask);