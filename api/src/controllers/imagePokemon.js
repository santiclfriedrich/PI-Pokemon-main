const axios = require('axios');
const { Image } = require('../db');

const getImage = async () => {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=250`);
    const result = apiInfo.data.results;
    

    for (const dataImg of result) {
        const pokemonInfo = await axios.get(dataImg.url)// info detalla del pokemon
        const imageUrl = pokemonInfo.data.sprites.other.dream_world.front_default// Obtengo la URL de la imagen del Pokémon
       

        const response = await Image.findAll({ where: { image: imageUrl } });

        if (response.length === 0) {
         
            await Image.create({ image:imageUrl});
        }
    }

    return await Image.findAll();
}
module.exports = getImage;