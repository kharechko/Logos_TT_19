let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keys = ['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187',   '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220',  '65', '83', '68', '70', '71', '72','74', '75', '76', '186', '222','90', '88', '67','86', '66', '78', '77', '188', '190', '191'];



let textarea = document.querySelector('textarea');
let keyboard = document.getElementById('keyboard');

for(let i = 0; i < letters.length; i++){
 block = document.createElement('button');
 block.classList.add('button');
 block.innerText = letters[i];
 keyboard.appendChild(block);
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

let key__pos = (el, n, text) => {
  el.innerText = text;
    return keyboard.insertBefore(el, keyboard.children[n]);
}



b_s.classList.add('keys', 'key_w');
t_b.classList.add('key_t', 'keys');
c_l.classList.add('keys', 'key_w');
e_r.classList.add('keys', 'key_w');
shft.classList.add('keys', 'key_w');
shft2.classList.add('keys', 'key_w');
spc.classList.add('keys', 'key_sp');

key__pos(b_s,  14, 'Backspace');
key__pos(t_b, 15, 'Tab');
key__pos(c_l,  29, 'CapsLock');
key__pos(e_r,   41, 'Enter');
key__pos(shft, 42, 'Shift')
key__pos(shft2, 56, 'Shift');
key__pos(spc,   57, '');

keyboard.appendChild(spc, shft2);


let children = document.querySelectorAll('button');

document.addEventListener('keydown', function(event) {

 for(let i = 0; i < letters.length; i++){

      if (event.keyCode == keys[i]) {
         keyboard__keys[i].classList.add('press_key');
         textarea.value += event.key;
       }
     }
  })


    document.addEventListener('keyup', function(event) {

      for(let i = 0; i < letters.length; i++){
     
           if (event.keyCode == keys[i])  keyboard__keys[i].classList.remove('press_key');
        }   
      })


    let f_down = n =>   keyboard.children[n].classList.add('press_key');

         document.addEventListener('keydown', function(event) {
           
          switch(event.keyCode) {
            case 8: 
            f_down(14);
            textarea.value = textarea.value.slice(0, textarea.value.length - 1)
            break;
            case 9:
           f_down(15);
           textarea.value+= '  '
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
            textarea.value+= ' '
            break;
            case 16: 
            if(event.location == 1) f_down(42);
            else f_down(53)
           }
          }
        )




         f_up = n => keyboard.children[n].classList.remove('press_key');

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
