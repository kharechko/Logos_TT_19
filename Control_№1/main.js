
let getSel = n => document.querySelector(n);
let addVis = n => n.classList.remove('non-visible');
let deleteVis = n => n.classList.add('non-visible');
let newTable = document.forms['newTableCreate'];
let newList = document.forms['newListCreate'];
let newStyle = document.forms['newStyle'];

deleteVis(newTable);
deleteVis(newList);
let create_input = getSel('.create_input');
let main_block = getSel('.main_block');
let edit_section = getSel('.edit_section');
let style_section = getSel('.style_section')
let lst_tbl_section = getSel('.lst_tbl_section');
let blk_contain = getSel('.blk_contain');
let color_blk = getSel('.color_blk');
let main_lst_tbl = getSel('.main_lst_tbl_sec');
let table_new = getSel('.table_new');

deleteVis(color_blk);
deleteVis(style_section);
deleteVis(lst_tbl_section);
deleteVis(edit_section)

let edit_btn = getSel('.edit_btn');
let save_btn = getSel('.save_btn');

save_btn.addEventListener('click', function() {
    blk_contain.innerHTML = create_input.value;
    deleteVis(edit_section);
   
})

edit_btn.addEventListener('click', function() {
    addVis(edit_section);
    deleteVis(style_section);
})

let style_btn = getSel('.style_btn');

 style_btn.addEventListener('click', function() {

   addVis(style_section);
   deleteVis(edit_section);
})

let add_btn = getSel('.add_btn')
let bottom_blk = getSel('.bottom_blk');
let main_btns = getSel('.main-btns');

let colors = ['red', 'blue', 'green', 'black',
 'yellow', 'pink', 'grey', 'purple', 'brown'];

 let txt_size_radio = document.querySelectorAll('.txt_size');

 for(let i = 0; i < txt_size_radio.length; i++) {
    txt_size_radio[i].addEventListener('change', function() {
        blk_contain.style.fontSize = this.value
    })
}

for(let i = 0; i <= 9; i++) {
   smallBox = document.createElement('div');
   smallBox.style.width = '40px';
   smallBox.style.height = '40px';
   smallBox.style.background = colors[i];
   color_blk.appendChild(smallBox);
}

let txt_col_btn = getSel('.txt_col_btn');
let bd_col_btn = getSel('.bd_col_btn')

 txt_col_btn.addEventListener('click', function() {
   addVis(color_blk);
         for(let i = 0; i < color_blk.children.length; i++) {
              color_blk.children[i].onclick = function() {       
               blk_contain.style.color = colors[i];
               deleteVis(color_blk);
           }        
         }
     })

  bd_col_btn.addEventListener('click', function() {
      addVis(color_blk);
        for(let i = 0; i < color_blk.children.length; i++) {
            color_blk.children[i].onclick = function() {       
            blk_contain.style.backgroundColor = colors[i];
            deleteVis(color_blk);
        }        
      }
   })

   let bold_txt = getSel('.bold_txt');
   let curs_txt = getSel('.curs_txt');

   
   let txt_family = getSel('.txt_family'); 
   txt_family.addEventListener('change', function() {
    blk_contain.style.fontFamily = this.value;
})

bold_txt.addEventListener('change', function() {
    if(bold_txt.checked)  blk_contain.style.fontWeight =  this.value;
       else   blk_contain.style.fontWeight =  'initial';
  })
  
  let tbl_btn = getSel('.tbl_btn');

 curs_txt.addEventListener('change', function() {
    if(curs_txt.checked) blk_contain.style.fontFamily =  this.value;

       else   blk_contain.style.fontFamily =  'initial';
  })

 tbl_btn.addEventListener(('click'), function() {
    addVis(newTable);
    deleteVis( newList);

 })
 save_btn.addEventListener('click', function() {
    blk_contain.innerHTML = create_input.value;
    deleteVis(edit_section); 
})

newTable.tbl_btn.addEventListener('click', function() {
      addVis(edit_section);
      addVis(bottom_blk);
      addVis(main_btns);
      addVis(blk_contain);
      let  tbl_contain = document.createElement('div');
      let tbl = document.createElement('table')
      let tbl_body = document.createElement('tbody');
      let tbl_row;
      deleteVis(tbl_contain);
    for(let i = 0; i < newTable.count_tr.value; i++){
        tbl_row = document.createElement('tr');

          for(let i = 0; i < newTable.count_td.value; i++) {
                tbl_col = document.createElement('td');
                tbl_col.innerText = 'TD';
                tbl_col.style.textAlign  = 'center';
                tbl_col.style.width = newTable.td_width.value + 'px';
                tbl_col.style.height = newTable.td_height.value + 'px';
                tbl_col.style.borderWidth  = newTable.bd_width.value + 'px';
                tbl_col.style.borderStyle = newTable.bd_style.options[newTable.bd_style.selectedIndex].value;
                tbl_col.style.borderColor = newTable.bd_color.options[newTable.bd_color.selectedIndex].value; 
                tbl_row.appendChild(tbl_col);    
              }
              tbl_body.appendChild(tbl_row);
          }
            tbl.appendChild(tbl_body);
            tbl_contain.appendChild(tbl);
            create_input.value += tbl_contain.innerHTML;
            deleteVis(newTable);
            deleteVis(lst_tbl_section);
            newTable.reset()
            
}) 

let lst_btn = getSel('.lst_btn');

   lst_btn.addEventListener(('click'), function() {
       addVis(newList);
       deleteVis(newTable);   
 })

    newList.lst_btn.addEventListener('click', function() {
       addVis(edit_section);
       addVis(bottom_blk);
       addVis(main_btns);
       addVis(blk_contain);
       let lst_contain = document.createElement('div');
       deleteVis(lst_contain)
        ul = document.createElement('ul');
            for(let i = 0; i < newList.count_li.value; i++) {
                  let li = document.createElement('li');
                  ul.appendChild(li);
                  li.innerText = 'item' + 1;
                  li.style.listStyle =  newList.list_style.options[newList.list_style.selectedIndex].value;
              } 
        lst_contain.appendChild(ul);
        deleteVis(newList);
        create_input.value += lst_contain.innerHTML;
        deleteVis(lst_tbl_section)
        newList.reset();
}) 

add_btn.addEventListener('click', function() {
    deleteVis(blk_contain);
    deleteVis(bottom_blk);
    deleteVis(main_btns);
    addVis( main_block);
    addVis(lst_tbl_section);
    tbl_btn.checked = false;
    lst_btn.checked = false;
})

