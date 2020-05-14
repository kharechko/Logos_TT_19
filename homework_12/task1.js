



let block = document.getElementById('block');

block.style.width = '400px';
block.style.height = '400px';
block.style.position = 'absolute';
block.style.left = 'calc(50% - 200px)';
block.style.top = '40px';
block.style.backgroundColor = 'purple';


let colors = ['red', 'yellow', 'green'];
let i = 0;


block.onmouseover = function() {
  this.style.backgroundColor = colors[i++];
  if (i > 3) i = 0;
  }

block.onmouseout = function() {
    this.style.backgroundColor = 'purple'
}


