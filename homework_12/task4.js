
let getSel = sel => document.querySelector(sel);
getSel('ol');



let _l = document.querySelectorAll('ol>li');




for(let i = 0; i < _l.length; i++){

   _l[i].style.fontSize = '25px';
   _l[i].style.fontWeight = '1000';
   _l[i].style.cursor = 'pointer';
   _l[i].onclick = function() {

        _l[i].style.color = _l[i].innerText;
   }

}


