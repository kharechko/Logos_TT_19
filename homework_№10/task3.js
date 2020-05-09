



array = [88,783, 4, 5988, 68]

let arrToString = (arr) => {
    
    arr = arr.map(item => item.toString());
    arr = arr.map(item => item.length);
   
    return console.log(arr)
} 


arrToString(array)
