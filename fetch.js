const fetch = require('node-fetch');

async function getNameData(){

    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    //const request = await fetch(' Https://rickandmortyapi.com/api/character/1')
    const data = await request.json()
    .then(data => {
        data.map(elment => {
            console.log(elment.name)
        })
    }).catch()
}

getNameData()