const { pokemon, type } = require('../db');

const newPokemon = async(name, image, hp, attack, defense, height, weight, types) => {

    const response = await pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        height,
        weight,
        types

    })

    types.map(async (temp) => {
        const firstType = await type.findOne({ where: {name: temp} });
        await response.addTypes(firstType)
    })

    return response

} 

module.exports = newPokemon