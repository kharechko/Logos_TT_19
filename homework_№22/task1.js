$(document).ready(function () {
        $('.element').on('click',function(){
            $('.element').animate({
            width: Math.floor(Math.random() * 400 + 10) +'px',
            height: Math.floor(Math.random() * 400 + 10) +'px',
            top: Math.floor(Math.random()*400) + 'px',
            left: Math.floor(Math.random()*800) +'px',
            backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16),   
    }, 1000, 'easeInOutBack')})
})

