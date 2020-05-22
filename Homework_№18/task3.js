


let users = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
]


let result = users.every(user => user.country.toLowerCase() == 'ukraine');

console.log(result);


