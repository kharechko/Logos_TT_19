

let getSel = sel => document.querySelector(sel);


let newForm = document.forms['account'];

let userBio = getSel('.second_page');
userBio.classList.remove('second_page');
userBio.classList.add('non-visible');

let userMan = getSel('.gender_male');
let userWoman = getSel('.gender_female');
let userGender = getSel('.radio_btn');
let userIcon = getSel('.human_icon');
let userBim = getSel('.h_name');
let userAddress = getSel('.h_email');
let userJob = getSel('.user_job');
let bottomBtn = getSel('.bottom_btn');
let sel = getSel('.sel');








newForm.sign_up.addEventListener('click', function() {

  if(newForm.check.checked) {
     newForm.classList.add('non-visible');
     userBio.classList.add('second_page');
       if(userMan.checked) userIcon.classList.add('portrait_man');
       else if(userWoman.checked) userIcon.classList.add('portrait_woman'); 
          userBim.innerText = newForm.f_name.value + ' ' + newForm.s_name.value;
          userAddress.innerText = newForm.address.value;
          userJob.innerText =  newForm.user_job.options[newForm.user_job.selectedIndex].value;

        }

     })





bottomBtn.addEventListener('click', function(){
  newForm.classList.remove('non-visible');
  userBio.classList.remove('second_page');
  userBio.classList.add('non-visible');
  newForm.reset();

})

