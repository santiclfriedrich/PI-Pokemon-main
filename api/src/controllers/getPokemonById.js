const axios = require('axios');
const {Pokemon, Type} = require('../db');

const getPokemonById = async (id) => {

    //consulta a la DB
    if(id.toString().length > 5){
        const pokemonDataDb = [await Pokemon.findAll(id, { include: { model: Type } })];
        const newPokemon = pokemonDataDb.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types.map(type => type.name)
            }
        })
        return newPokemon[0]
    }

    //consulta a la API
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data
        const pokemonTypesAPI = pokemonData.types.map(type => type.type.name)

        const pokemonAPI = {
            id,
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            hp: pokemonData.stats[0]["base_stat"],
            attack: pokemonData.stats[1]["base_stat"],
            defense: pokemonData.stats[2]["base_stat"],
            speed: pokemonData.stats[5]["base_stat"],
            height: pokemonData.height,
            weight: pokemonData.weight,
            tipo: pokemonTypesAPI
        }
        return pokemonAPI

}

module.exports = { 
    getPokemonById
}