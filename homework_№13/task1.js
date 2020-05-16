let colors = ['lightgreen', 'purple', 'green', 'yellow', 'grey', 'red', 'blue', 'pink', 'brown'];
let images = ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80', 'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'];
let box;
let n = 0;

f_mainBlk = function(box) {
  box.style.width = '600px';
  box.style.height = '600px';
  box.style.background = 'red';
  box.style.display = 'flex';
  box.style.flexDirection = 'row';
  box.style.flexWrap = 'wrap';
  box.style.position = 'absolute';
  box.style.left = 'calc(50% - 300px)';
  }

f_size = function(box) {
  box.style.width = '200px';
  box.style.height  = '200px';
  
}


      let color = document.querySelector('.color');


      color.addEventListener('click', function(){

          let box = document.createElement('div');
        f_mainBlk(box);

              for(let i = 0; i < 9; i++) {
                sml_box = document.createElement('div');
                f_size(sml_box);
                sml_box.style.background = colors[i];
                box.appendChild(sml_box);
            let children = box.children;

            for(let i = 0; i < children.length; i++){
                children[i].onclick = function(){
                  document.body.style.background = colors[i];
              }
              }
            }
              document.body.appendChild(box)
          })




          let img = document.querySelector('.img');

          img.addEventListener('click', function(){

              let box = document.createElement('div');
              f_mainBlk(box);
              for(let i = 0; i < 9; i++) {
                  sml_box = document.createElement('div');
                  sml_box.style.background = 'url('+images[i]+')';
                f_size(sml_box);
                  box.appendChild(sml_box);
                  
                  let children1 = box.children;


                  for(let i = 0; i < children1.length; i++){
                        children1[i].onclick = function(){
                        document.body.style.background = 'url('+images[i]+')';
                        document.body.style.backgroundRepeat = 'no-repeat';
                        document.body.style.backgroundSize = 'cover';
                      }
                    }
                  }
                document.body.appendChild(box)
              })