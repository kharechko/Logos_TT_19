const newForm = document.forms['newForm'];
const regName = /^[a-z]{1,20}$/i
const regEmail = /^[a-z]+[\w,.-]+@\w+\.\w+$/;
const regPassword = /^\w{8,20}$/i;
const regNumber = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/
let true_icon = document.querySelectorAll('.true_icon')
let false_icon = document.querySelectorAll('.false_icon')

invalidValue.forEach(n => n.classList.add('none'))
true_icon.forEach(n => n.classList.add('none'))
false_icon.forEach(n => n.classList.add('none'));

$(function() {
  $('input[type="tel"]').inputmask({ alias: "phone", "clearIncomplete": true });
});
$('#phone').inputmask({ alias: "phone", "clearIncomplete": true });
let getSel = n =>document.querySelector(n);

let toTop = function(n) {
  getSel(n).classList.add('toTop')
  getSel(n).classList.remove('plchldr')
}

getSel('.inpt1').addEventListener('focus', () => toTop('.plchldr1'))
getSel('.inpt2').addEventListener('focus', () => toTop('.plchldr2'))
getSel('.inpt3').addEventListener('focus', () => toTop('.plchldr3'))
getSel('.inpt4').addEventListener('focus', () => toTop('.plchldr4'))
getSel('.phone_mask').addEventListener('focus',() => toTop('.plchldr5'))
   
let validate = function(input, index, regex) {

       if(regex.test(input.value) == true) {
          true_icon[index].classList.remove('none');
          input.classList.add('true_border')
          input.classList.remove('error_border');
          false_icon[index].classList.add('none');
          invalidValue[index].classList.add('none')
        }

        else {
            input.classList.add('error_border');
            input.classList.remove('true_border');
            false_icon[index].classList.remove('none');
            invalidValue[index].classList.remove('none')
            true_icon[index].classList.add('none');
          }
        }
newForm.addEventListener('submit', (e) => {
      e.preventDefault();
      validate(newForm.fname,0,regName);
      validate(newForm.lname, 1, regName);
      validate(newForm.email, 2, regEmail);
      validate(newForm.number, 3, regNumber);
      validate(newForm.password, 4, regPassword)
})


