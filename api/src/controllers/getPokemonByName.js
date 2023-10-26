const axios = require('axios');
const { pokemon } = require('../db');

const getPokemonByName = async (name) => {

    const pokemonDb = await pokemon.findAll({ where: {name: name} });
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonDataApi = response.data;

    const pokemonFound = {
        id: pokemonDataApi.id,
        name: pokemonDataApi.name,
        image: pokemonDataApi.sprites.front_default,
        hp: pokemonDataApi.stats[0]["base_stat"],
        attack: pokemonDataApi.stats[1]["base_stat"],
        defense: pokemonDataApi.stats[2]["base_stat"],
        height: pokemonDataApi.height,
        weight: pokemonDataApi.weight,
        types: pokemonDataApi.types.map(type => type.type.name )
    }
    return pokemonDb.concat(pokemonFound)
}

module.exports = getPokemonByName;