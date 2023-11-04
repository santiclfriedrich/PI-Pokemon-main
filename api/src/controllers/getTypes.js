const axios = require('axios');
const { Type } = require('../db');

const getType = async () => {
    const typeApi = await axios.get(`https://pokeapi.co/api/v2/type`);
    const result = typeApi.data;

    for (const typeData of result.results) {//itero sobre cada elemento en el arreglo result.results
        
        const typeName = typeData.name;//se utiliza para acceder al nombre de cada tipo dentro del bucle.

        const existingType = await Type.findAll({ where: { name: typeName } });

        if (existingType.length === 0) {
            // Si no existe, crea un nuevo registro en la base de datos
            await Type.create({ name: typeName });
        }
    }

    return await Type.findAll();
}
module.exports = getType;