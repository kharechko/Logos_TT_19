let ask = prompt('');

let getCount = (str) => {
    str = str.toLowerCase();
    let _h = 'html';
    let count = 0;
    let _i = str.indexOf(_h);
    
       while (_i > -1){
         ++count;
         _i = str.indexOf(_h, ++_i);
      }

     return console.log(count);
}


getCount(ask);
