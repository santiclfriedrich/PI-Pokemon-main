const axios = require('axios');
const { Op } = require('sequelize')
const { Pokemon, Type, Image } = require('../db');

const getName = async (name) => {
    const pokemonDb = await Pokemon.findAll({ where: { name:{[Op.iLike]: `%${name}%`} }, include: [Type, Image] });
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
    
    if(newPokemon.length > 0) {
        return newPokemon
    } 
    
    const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = pokeapi.data
    const pokemonFund = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        hp: pokemon.stats[0]["base_stat"],
        attack: pokemon.stats[1]["base_stat"],
        defense: pokemon.stats[2]["base_stat"],
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(type => type.type.name).join(', ')
    }
    return pokemonFund
   
}

module.exports = getName;