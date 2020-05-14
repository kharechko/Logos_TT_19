



let block = document.getElementById('block');
let _bd = '5px solid green';
let i_txt = 'У мене є секрет!';
let blk_txt = block.innerText;
block.style.width = '400px';
block.style.height = '400px';
block.style.position = 'absolute';
block.style.left = 'calc(50% - 250px)';
block.style.top = '40px';
block.style.textAlign = 'center';
block.style.paddingTop = '20px';
block.style.backgroundColor = 'purple';
block.style.fontSize = '25px';
block.innerText = i_txt;
block.style.border = _bd;


block.onmouseover = function() {
    this.style.backgroundColor = 'black';
    this.innerText = 'Хочеш знати який?';
    this.style.border = '6px solid blue';
    this.style.backgroundColor = 'yellow';
}


block.onmousedown = function(event) {
    this.style.backgroundColor = 'white';
    this.innerText = 'А я тобі не скажу!';
    this.style.border = '6px solid yellow';
    this.style.backgroundColor = 'blue';
}

block.onmouseup = block.onmouseover;

block.onmouseout = function() {
   this.style.backgroundColor = 'purple';
   this.innerText = i_txt;
   this.style.border = _bd
}