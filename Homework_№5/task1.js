let month = +prompt('please enter a month')
switch(month){
    case 1: case 2: case 12:
    alert('This is spring');
    break;
    case 3:case 4: case 5:
    alert("It's spring");
    break;
    case 6:case 7:case 8:
    alert("It's summer");
    break;
    case 9: case 10: case 11:
    alert("It's autumn")
    break;
    default:
    alert("Sorry, there's no such season")
    break;
    
}
