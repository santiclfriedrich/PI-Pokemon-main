const { Pokemon, Type, Image } = require ('../db');

const createPokemon = async(name, image, hp, attack, defense, height, weight, types) =>{

  const response = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    height,
    weight
  })

  types.map(async (temp) => { 
    const newTypes = await Type.findOne({ where: { name: temp} });
      await response.addTypes(newTypes);
    });

      const newImagenes = await Image.findOne({ where: { image: image} });
        await response.addImage(newImagenes);
    return response;
}
module.exports = createPokemon;