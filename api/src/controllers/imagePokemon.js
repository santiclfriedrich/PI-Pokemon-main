const axios = require('axios');
const { image } = require('../db');

const getImage = async () => {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const result = apiInfo.data.results;

    for (const dataImg of result){

        const url = dataImg.url

        const response = await image.findAll({where: {url: url} });

        if (!response) {
            await image.create({ url: url })
        }

    }


    return await image.findAll();

}

module.exports = getImage;