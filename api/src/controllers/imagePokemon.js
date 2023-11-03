const axios = require('axios');
const { Image } = require('../db');

const getImage = async () => {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const result = apiInfo.data.results;

    for (const dataImg of result){

        const pokeInfo = await axios.get(dataImg.url)

        const imageUrl = pokeInfo.data.sprites.front_default

        const response = await Image.findAll({ where: { image: imageUrl } 
        
        });
        
    if(response.length === 0){
        await Image.create({ image: imageUrl })
    }

    }


    return await Image.findAll();

}

module.exports = getImage;