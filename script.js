const baseURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const searchText = document.getElementById("poke-name");
const pokeSearchBtn = document.getElementById("poke-search-btn");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("pokemon-weight");
const pokemonHeight = document.getElementById("pokemon-height");
const pokeImg = document.getElementById("poke-img");
const pokeType = document.getElementById("pokemon-type");

const pokemonHp = document.getElementById("pokemon-hp");
const pokemonAttack = document.getElementById("pokemon-attack");
const pokemonDefence = document.getElementById("pokemon-defence");
const pokemonSpAttack = document.getElementById("pokemon-sp-attack");
const pokemonSpDefence = document.getElementById("pokemon-sp-defence");
const pokemonSpeed = document.getElementById("pokemon-speed");

pokeSearchBtn.addEventListener("click", () => {
    const name = searchText.value.toLowerCase();
    fetch(baseURL + name)
    .then(res => res.json())
    .then(data => printData(data))
    .catch(err => window.alert("Pokémon not found"));
});


function printData(data) {
    const { name, id, weight, height, types, stats, sprites } = data;
    pokemonName.innerText = name;
    pokemonId.innerText = `#${id}`;
    pokemonWeight.innerHTML = `Weight: ${weight}`;
    pokemonHeight.innerHTML += `Height: ${height}`;
    const typeName = types[0].type.name;
    pokeType.style.display = "inline";
    pokeType.innerText = typeName;
    pokemonHp.innerText = stats[0].base_stat;
    pokemonAttack.innerText = stats[1].base_stat;
    pokemonDefence.innerText = stats[2].base_stat;
    pokemonSpAttack.innerText = stats[3].base_stat;
    pokemonSpDefence.innerText = stats[4].base_stat;
    pokemonSpeed.innerText = stats[5].base_stat;
    pokeImg.src = sprites.front_default;
}

