require('dotenv').config();
const axios = require('axios');
const { Pokemon, Type, Image } = require('../db')
const URL = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`

const getPokemons = async () => {

    const pokemonDb = await Pokemon.findAll({ include: [ { model: Type }, { model: Image } ] });

    const newPokemon = pokemonDb.map((pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.Images.map(img => img.image),
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.Types.map(type => type.name).join(', ')
        }
    })

    const response = await axios.get(`${URL}`)
    const pokeResults = response.data.results;
    const promises = pokeResults.map(async (poke) => {
        const pokemonApiResponse = await axios.get(poke.url);
        const pokeInfoApi = pokemonApiResponse.data;

        const poke1 = {
            id: pokeInfoApi.id,
            name: pokeInfoApi.name,
            image: pokeInfoApi.sprites.other.dream_world.front_default,
            hp: pokeInfoApi.stats[0]["base_stat"],
            attack: pokeInfoApi.stats[1]["base_stat"],
            defense: pokeInfoApi.stats[2]["base_stat"],
            height: pokeInfoApi.height,
            weight: pokeInfoApi.weight,
            types: pokeInfoApi.types.map(type => type.type.name).join(', ')
        }
        return poke1

    })
    const pokeData = await Promise.all(promises)

    const allData = newPokemon.concat(pokeData)
    return allData

};

module.exports = 
    getPokemons
