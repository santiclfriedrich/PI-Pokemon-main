const axios = require('axios');
const { type } = require('../db');

const getType = async () => {

    const typeApi = await axios.get(`https://pokeapi.co/api/v2/type`);
    const typeNames = typeApi.data.results.map(typeData => typeData.name);

    const existingTypes = await type.findAll({ where: { name: typeNames } });

    const newTypeNames = typeNames.filter(typeName => !existingTypes.some(type => type.name === typeName));

    if (newTypeNames.length > 0) {

        const newTypes = newTypeNames.map(typeName => ({ name: typeName }));
        await type.bulkCreate(newTypes)

    }

    return type.findAll();

}

module.exports = getType;