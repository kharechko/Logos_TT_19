





let children = document.body.children;
document.body.style.display = 'flex';
document.body.style.justifyContent = 'space-evenly';
document.body.style.marginTop = '40px';


for(i = 0; i < children.length; i++){
    children[i].style.border = '8px double black'
    children[i].style.width = '300px';
    children[i].style.height = '300px';
    children[i].onclick = function() {
        let ask = prompt('image please');
        this.style.background = 'url(' + ask + ')';
        this.style.backgroundSize = '95%';
    }
}







