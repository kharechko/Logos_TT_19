let newForm = document.forms['newForm'];
let getSel = n => document.querySelector(n);
let userArray = [];
let tbody = getSel('tbody');
let create = n => document.createElement(n);
newForm.edit.classList.add('btn', 'btn-outline-success');
newForm.add.classList.add('btn', 'btn-outline-success');
newForm.edit.classList.add('none')
let newUser;
let userIndex;

function User(log,pass,email) {
     this.login = log;
     this.password = pass;
     this.email = email;
 }
    
function addUser() {
    let log =  newForm.login.value;
    let pass = newForm.password.value;
    let email = newForm.email.value;
    newUser = new User (log, pass, email);
    userArray.push(newUser);
    newForm.reset() 
  }

function render() {
        tbody.innerHTML = '';
        for(let i = 0; i < userArray.length; i++) {      
            let tr =  create('tr')
            let td = create('td')
            td.innerText = i+1
            tr.appendChild(td)
        
        for(let key in userArray[i]) {
                  let newTD = create('td');
                  newTD.innerText = userArray[i][key]
                  tr.appendChild(newTD)
        }
            let edit_btn = create('button');
            edit_btn.innerText = 'Edit';
            let delete_btn = create('button');
            delete_btn.innerText = 'Delete'
            edit_btn.classList.add('btn','btn-warning')
            delete_btn.classList.add('btn','btn-danger')
            let edit_td = create('td')
            let delete_td = create('td')
            edit_td.appendChild(edit_btn)
            delete_td.appendChild(delete_btn)
            tr.appendChild(delete_td)
            tr.appendChild(edit_td)
            tbody.appendChild(tr)
            delete_btn.addEventListener('click', () => deleteUser(i))
            edit_btn.addEventListener('click', () => editUser(i))
          }
        }

newForm.add.addEventListener('click', function() {
    let log = newForm.login.value
    let pass = newForm.password.value
    let email = newForm.email.value
     newUser = new User(log,pass,email);
     userArray.push(newUser)    
     render()
     newForm.reset()
   })

    function deleteUser(id) {
    userArray.splice(id, 1)
    render()
    }

function editUser(id) {
    userIndex = id;
    newForm.login.value = userArray[id].login
    newForm.password.value = userArray[id].password
    newForm.email.value = userArray[id].email
    newForm.add.classList.add('none');
    newForm.edit.classList.remove('none')
}

newForm.edit.addEventListener(('click'), () => {
    saveEditUser() 
    newForm.reset()
    render()
    newForm.edit.classList.add('none');
    newForm.add.classList.remove('none');
   }   
 )

function saveEditUser() {
    let log = newForm.login.value
    let pass = newForm.password.value
    let email = newForm.email.value
    newBorn = new User(log,pass,email);
    userArray.splice(userIndex, 1, newBorn);
}

