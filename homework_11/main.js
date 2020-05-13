
let bd = prompt('Введіть, будь ласка, колір фону');
let f_t = prompt('Введіть, будь ласка, стиль тексту');
let h_ = prompt('Введіть, будь ласка, розміщення заголовку');
let p_bd = prompt('Введіть, будь ласка, колір фону для параграфа');
let p_col = prompt('Введіть, будь ласка, колір тексту параграфа');
let f_weight = prompt('Ведіть, будь ласка, жирність тексту');
let f_size = prompt('Введіть, будь ласка, розмір шрифту');
let lst_style = prompt('Введіть, будь ласка, стиль списку');
let col_blk = prompt('Введіть, будь ласка, колір тексту у блоці');
let getSel = sel => document.querySelector(sel);

document.body.style.backgroundColor = bd;
document.body.style.fontStyle = f_t;

getSel('h1').style.textAlign = h_;
getSel('p').style.backgroundColor = p_bd;
getSel('p').style.color = p_col;
getSel('ul').style.listStyleType = lst_style;


let _a = document.querySelectorAll('p>a');

for (let i = 0; i < 3; i++) {

    let colorLink = prompt('Введіть, будь ласка, колір тексту посилання');
    let text = prompt('');
        _a[i].innerText = text;
        _a[i].style.color = colorLink;
        _a[i].style.textDecoration = 'none';

         if (text.endsWith('.ua')) _a[i].href += text.slice(0, text.length - 3);
         else _a[i].href += text;

}

let div = getSel('div');
let children = div.children;

for (var i = 0; i < children.length; i++) {

    children[i].style.color = col_blk;
    children[i].style.fontWeight = f_weight;
    children[i].style.fontSize = f_size;
}