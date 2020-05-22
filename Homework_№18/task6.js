

let arr =  [1, 2, 5, 0, 4, 5, 6];


//////////     1 task     /////////
/*
arr = arr.slice(0, arr.indexOf(0));

const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
    }, 0);
    
    console.log(sum)


*/


//////////////    2 task    /////////////


let count = 0;

const total = arr.reduce((total, amount, index, array) => {
  total += amount;
  if(total < 10) count++

  return count
  
});

console.log(total)
