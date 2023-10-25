const axios = require('axios');
const {pokemon, type} = require('../db');

const getPokemonById = async (id) => {

    //consulta a la API
    if(id.length < 6){
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data
        const pokemonTypesAPI = pokemonData.types.map(type => type.type.name)

        const pokemonAPI = {
            id,
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            life: pokemonData.stats[0]["base_stat"],
            attack: pokemonData.stats[1]["base_stat"],
            defense: pokemonData.stats[2]["base_stat"],
            speed: pokemonData.stats[5]["base_stat"],
            height: pokemonData.height,
            weight: pokemonData.weight,
            tipo: pokemonTypesAPI
        }
        return pokemonAPI
    }

    //consulta a la DB
    if(id.length === 35){
        const pokemonData2 = [await pokemon.findAll(id, { include: { model: type } })];
        const newPokemon = pokemonData2.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                life: pokemon.life,
                attack: pokemon.attack,
                defense: pokemon.defense,
                height: pokemon.height,
                weight: pokemon.weight
            }
        })
        return newPokemon[0];
    }

}

module.exports = { 
    getPokemonById
}