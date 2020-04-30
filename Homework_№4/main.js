
let ask = prompt('Введіть логін, будь ласка');
let count = 1;
let attempt='login';
let attempt2;
if (ask==attempt){
   alert('Запрошуємо на сайт');
}
else {
   alert('Ви ще маєте 4 спроби')
do{
   
   count++;
   attempt2=prompt('Спробуйте ще раз')


}
while( count<=4 && attempt2!=attempt)
if (count<=4){
    alert('Ласкаво просимо')
}
else{
    alert('Спробуйе трохи пізніше')
}
}
