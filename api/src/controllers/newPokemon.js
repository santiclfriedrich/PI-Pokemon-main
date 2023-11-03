const { Pokemon, Type, Image } = require('../db');

const newPokemon = async(name, image, hp, attack, defense, height, weight, types) => {

    const response = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        height,
        weight,
        types
    })

    types.map(async (temp) => {
        const newTypes = await Type.findOne({ where: {name: temp} });
        await response.addTypes(newTypes)
    })

    const newImages = await Image.findOne({ where: { image: image } });
        await response.addImage(newImages)

    return response;

} 




module.exports = newPokemon