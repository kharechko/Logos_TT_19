


let ask = prompt('');

let getCount = (str) =>{
    str = str.toLowerCase();
    let _h = 'html';
    let count = 0;
    let indOf = str.indexOf(_h);
    
       while (indOf > -1){
         ++count;
         indOf = str.indexOf(_h, ++indOf);
      }

     return console.log(count);
}


getCount(ask);
