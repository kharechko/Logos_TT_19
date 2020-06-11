let order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13 ,14, 15, 16, 17, 18, 19, 20];

function randomArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let arr2 = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[arr2]] = [arr[arr2], arr[i]]
      }
   return arr
}

randomArr(order)

let box = document.querySelectorAll('.box');

$(document).ready(function() {
        for(let i = 0; i < order.length; i++) {
        box[i].style.order = order[i]
        }
       $('.box').draggable({
    start: function() {
        $(this).css('z-index', '1');
    },
    stop: function() {
        $(this).css('z-index', '0');
    },
   cursor: 'move'
 })
   $('.parent2').droppable()

})


console.log(window.innerWidth)
