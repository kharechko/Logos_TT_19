
   let person = new Object();
    person.firstName  = 'Ivan';
    person.secondName = 'Ivanov';
    person.showData = function() {
      return  console.log(this.firstName, this.secondName)
  }

   let newPerson = Object.assign({}, person);
    newPerson.firstName = 'Petro';
    newPerson.secondName = 'Petriv';

    person.showData();
    newPerson.showData();