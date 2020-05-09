
let ask = prompt ('');

function getGmail(str) {

    let _dot = str.lastIndexOf('.');
    let _at = str.lastIndexOf('@');
  
   if(_at < _dot && _at > 0 && str.indexOf('@@') == -1 && _dot > 2 && (str.length - _dot) > 2) console.log(str)
   
   
}


getGmail(ask);