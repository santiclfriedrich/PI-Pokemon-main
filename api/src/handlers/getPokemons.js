const  getPokemons = require('../controllers/getPokemons');

const PokemonsHandler = async (req, res) => {

    try {
        const allPokemons = await getPokemons();
        res.status(200).send(allPokemons)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

module.exports = 
    PokemonsHandler
