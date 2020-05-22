

let arr = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Migeul',
        country: 'Cuba'
    }
]


let c = arr.some(user => user.country.toLowerCase() == 'cuba');

console.log(c)
