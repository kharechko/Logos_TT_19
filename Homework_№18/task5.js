

let arr = [1, 'string', [3, 4], 5, [6, 7]];


function arrFilter() {
    let newArr = [];
   
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]))    newArr.push(arr[i])
    }
    return  console.log(newArr)
}


arrFilter();
