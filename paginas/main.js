
/* const pokebola = document.getElementsByClassName('.pokebola')

pokebola.addEventListener('onclick', newPokemon())

function newPokemon() {
    location.reload
} */

let x = Math.ceil(Math.random()*850);


const url = `https://pokeapi.co/api/v2/pokemon/${x}/`

fetch(url)
.then(response => response.json())
.then(data => {

    let element = document.getElementById('elem')
    element.innerHTML = `
    <p>${data.name}</p><img src="${data.sprites.front_default}"/>
    `;

    console.log(data)
})
.catch(err=>console.log(err))