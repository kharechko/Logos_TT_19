let  count = 0;

let getSpace = (str) => {
for(let i = 0; i < str.length; i++){
    
    if(str[i] == ' ') {
        count++;
    }
}

    return console.log(count)
}

let ask = prompt('');
getSpace(ask);
