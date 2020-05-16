let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keys = ['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187',   '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220',  '65', '83', '68', '70', '71', '72','74', '75', '76', '186', '222','90', '88', '67','86', '66', '78', '77', '188', '190', '191'];



let textarea = document.querySelector('textarea');
let keyboard = document.getElementById('keyboard');

for(let i = 0; i < letters.length; i++){
 block = document.createElement('button');
 block.style.background = 'white';
 block.style.lineHeight = '65px';
 block.style.width = '60px';
 block.style.height = '65px';
 block.style.fontSize = '16px';
 block.style.border = 'none';
 block.innerHTML = letters[i];
 block.style.borderRadius = '10px'
 block.style.marginBottom = '10px'
 keyboard.appendChild(block);
 block.style.textAlign = 'center';
block.style.verticalAlign = 'middle';
block.style.outline = 'none';
block.classList.add('k_l');
}
let keyboard__keys = document.getElementsByClassName('k_l');

let f = () => document.createElement('button');

let b_s = f();
let t_b = f();
let c_l = f();
let e_r = f();
let shft = f();
let shft2 = f();
let spc = f();

let key__pos = (el,  w, n, text) => {
 
  el.style.width = w;
  el.style.h = '80px';
  el.style.borderRadius = '10px';
  el.style.background = 'white';
  el.style.fontSize = '16px';
  el.innerText = text;
  el.style.marginBottom = '10px'
  el.style.border = 'none';
    return keyboard.insertBefore(el, keyboard.children[n]);
}


key__pos(b_s, '170px', 14, 'Backspace');
key__pos(t_b, '150px', 15, 'Tab');
key__pos(c_l, '170px', 29, 'CapsLock');
key__pos(e_r, '170px',  41, 'Enter');
key__pos(shft,'170px', 42, 'Shift')
key__pos(shft2, '170px',  56, 'Shift');
key__pos(spc, '100%',  57, '');


spc.style.backgroundColor = 'white';
spc.style.padding = '30px'
keyboard.appendChild(spc, shft2);

let children = document.querySelectorAll('button');



document.addEventListener('keydown', function(event) {

 for(let i = 0; i < letters.length; i++){

      if (event.keyCode == keys[i]) {
         keyboard__keys[i].style.background = 'lightgrey';
         textarea.value += event.key;
       }
     }
  })


    document.addEventListener('keyup', function(event) {

      for(let i = 0; i < letters.length; i++){
     
           if (event.keyCode == keys[i])  keyboard__keys[i].style.background = 'white';
        }   
      })


    let f_down = n =>   keyboard.children[n].style.background = 'lightgrey';

         document.addEventListener('keydown', function(event) {
           
          switch(event.keyCode) {
            case 8: 
            f_down(14);
            textarea.value = textarea.value.slice(0, textarea.value.length - 1)
            break;
            case 9:
           f_down(14);
           textarea.value+= '\t'
            break;
            case 20: 
            f_down(29);
            break;
            case 13:
            f_down(41);
            textarea.value+= '\n'
            break;
            case 32:
            f_down(54);
            textarea.value+= '\1'
            break;
            case 16: 
            if(event.location == 1) f_down(42);
            else f_down(53)
           }
          }
        )




         f_up = n => keyboard.children[n].style.background = 'white';

         document.addEventListener('keyup', function(event) {
           
          switch(event.keyCode) {
            case 8: 
            f_up(14);
            break;
            case 9:
            f_up(15);
            break;
            case 20: 
            f_up(29);
            break;
            case 13:
            f_up(41);
            break;
            case 32:
            f_up(54);
            break;
            case 16: 
            if(event.location == 1) f_up(42);
            else f_up(53);
            break;
         }
        }
        )