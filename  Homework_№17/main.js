
let getSel = n => document.querySelector(n);


let monthDay = getSel('.monthDay');
let timeZone = getSel('.timeZone');
let stil = getSel('.store');

function  getDate() {
    let today = new Date();   
   let month = today.getMonth()+1;
   let year = today.getFullYear();
   let day = today.getDate();
   if(month < 10)  month = '0' + month;
   if(day < 10)  day = '0' + day;
    monthDay.innerText = (`${day}:${month}:${year}`)
}

getDate()

setInterval(function() {
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(h < 10)  h = '0' + h;
    if(m < 10)  m = '0' + m;
    if(s < 10)  s = '0' + s;
    timeZone.innerText = (`${h}:${m}:${s}`)
}, 1000)

setInterval;

let timeWatch_contain = getSel('.timeWatch_contain');

 let st_start = getSel('.st_start');
 let st_stop = getSel('.st_stop');
 let st_res = getSel('.st_res');
 let st_loop = getSel('.st_loop')
 let stop_watch_data = getSel('.stop_watch_data');

  let  primary = 0; 
  let time = 0;
  let h;
  let minute;

    function timeWatch() {
        if (primary == 1) {
             setTimeout(function() {
                time++
                
                let h = Math.floor(time/100/60/60);
                let minute = Math.floor(time/100/60);
                let sec = Math.floor(time/100);
                let mSec = time % 100;

                if (minute < 10) minute = "0" + minute;

                if (h < 10) h = "0" + h;

                if (minute >= 60) minute = minute % 60;
      
                if (sec >= 60) sec = sec % 60;

                if (sec < 10) sec = "0" + sec;

                if (mSec < 10) mSec = "0" + mSec;

                timeWatch_contain.innerHTML = h + ':' + minute + ":" + sec + ":" + mSec;
                st_loop.onclick = function() {
    
                     stop_watch_data.innerHTML += h + ':' + minute + ":" + sec + ":" + mSec + '<br>';
                   
               }

                timeWatch();

            }, 100);
        }
    }


 st_start.onclick = function () {
    primary = 1;
    st_start.disabled = true;
    timeWatch();
}

    st_stop.onclick = function (){
        timeWatch_contain.innerHTML = time;
        primary = 0;
        st_start.disabled = false;
        
    }

    st_res.onclick = function () {
        primary = 0;
        time = 0;
        timeWatch_contain.innerHTML = '00:00:00:00';
        st_start.disabled = false;
        stop_watch_data.innerHTML = '';
    }

    
let setMinutes = getSel('.setMinutes');
let timerCount = getSel('.timerCount');
let plus_btn = getSel('.plus_btn');
let minus_btn = getSel('.minus_btn');
let count_min = getSel('.count_min');
let timer_contain = getSel('.timer_contain');


let min = 25;

count_min.innerHTML =  min;

minus_btn.addEventListener('click', minus = ()  =>{
    count_min.innerHTML =  --min
    if(min < 1) {
        return minus_btn.disabled = true
    }
    
} )

plus_btn.addEventListener('click', plus = () => {
    count_min.innerHTML =  ++min;
    minus_btn.disabled = false
    }
)

let minutes;
let seconds;

function updateCountDown() {

    let time = count_min.innerHTML * 60; 
   
         h =  setInterval (function() {
             minutes = Math.floor(time/60);
       
              seconds = time % 60;
       
            if(minutes < 10)  minutes = '0' + minutes;
            
            if(seconds < 10) seconds = '0' + seconds

            if(seconds <= 0 && minutes <= 0) {
              clearInterval(h)
              timer_start.disabled = false;    
          }
       
         timer_contain.innerHTML = minutes + ':' + seconds;
         
        time--
    
    }, 1000)  
}
 
let timer_reset = getSel('.timer_reset');
let timer_stop = getSel('.timer_stop');
let timer_start = getSel('.timer_start');

timer_start.onclick = function () {
    timer_start.disabled = true;
    updateCountDown()
}

    timer_stop.onclick = function (){
        timer_contain.innerHTML = minutes + ':' + seconds;
        timer_start.disabled = false;    
        clearInterval(h) 
    }

    timer_reset.onclick = function () {
        timer_contain.innerHTML = '00:00';
        timer_start.disabled = false;
        clearInterval(h)
    }
  
   


    
