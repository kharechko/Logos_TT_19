
  let arr1 = [1, 2, 3];
  let _add = [10, 20, 30];

function newArr(arr) {
    let  i = 0, arr2 = [];
    while(i < arr.length) {
       arr2.push(arr[i]);
       i++; 
     }

    arr2 = arr2.concat(_add);
   return console.log(arr2);
}


newArr(arr1);




