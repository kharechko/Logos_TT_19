let primaryNum=()=>{
 let num1=+prompt('Please enter a value for number one');
 let num2=+prompt('Please enter a value for number two')
 for (let i=num1; i<=num2; i++){
    if(i%2!=0 && i%3!=0 && i!=1){
        console.log(i)
    }
    else{
    }
 }
}
primaryNum()