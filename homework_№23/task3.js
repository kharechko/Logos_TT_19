$(document).ready(function () {
   function getAnimate(){
       $('.move').animate({
        height: '0px',   
      }, 60000).delay(4000).animate({
        height: '550px',
  },  60000)
}
   
function updateCountDown() {
 let count = 2;
    txt =  setInterval (function() {
    count--
   $('.count').text(count)
   if(count <= 0) clearInterval(txt)
  }, 60000)  
  
}
  setTimeout(getAnimate, 100) 
  setTimeout(updateCountDown, 100)      
});




