

array = [1, 2, 3, 4, 5, 6]

let arrToString = (arr) => {
   
    arr = arr.map(item => item.toString());
    return console.log(arr);
} 
 

arrToString(array)
