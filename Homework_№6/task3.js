let start=+prompt('Please enter a value for number one');
 let end=+prompt('Please enter a value for number two')
for (let i=start; i<=end; i++){
    let count =0;
    for (let j=2; j<i; j++){
        if(i%j){continue;}
        count+=1;

    }
    if (!count) console.log(i)
}
