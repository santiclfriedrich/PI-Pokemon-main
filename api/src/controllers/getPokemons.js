const axios = require('axios');

const getPokemons = async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    const allPokemons = response.data.results;
    return allPokemons;

};

module.exports = {
    getPokemons
};