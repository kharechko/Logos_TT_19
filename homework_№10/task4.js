



let array = ['js', 'python', 'html', 'css', 'html', 'js', 'python'];



let _del = (array) => {
     let arr = array.filter(function(value, index){ return array.indexOf(value) == index })
     console.log(arr)
 }
 _del(array);