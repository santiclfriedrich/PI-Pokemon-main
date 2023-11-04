const axios = require('axios')
const { Pokemon, Type, Image } = require('../db');

const getPokemonById = async (idPokemon) => {
  //hacer un if con la info de la db
  if (idPokemon.toString().length > 5) {
    const pokemonDb = [await Pokemon.findByPk(idPokemon, { include: [ { model: Type },{ model: Image }] })]
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
        types: pokemon.Types.map(type => type.name)
      }
    })
    return newPokemon[0];
  }
  
  const getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  const apiInfo = getInfo.data;
  const pokemonFund = {
    id: apiInfo.id,
    name: apiInfo.name,
    image: apiInfo.sprites.other.dream_world.front_default,
    hp: apiInfo.stats[0]["base_stat"],
    attack: apiInfo.stats[1]["base_stat"],
    defense: apiInfo.stats[2]["base_stat"],
    height: apiInfo.height,
    weight: apiInfo.weight,
    types: apiInfo.types.map(type => type.type.name)
}
  return pokemonFund

}

module.exports = getPokemonById;