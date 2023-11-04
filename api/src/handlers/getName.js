const getPokemonByName = require('../controllers/getPokemonByName')

const getPokemonByNameHandler = async (req, res) => {

    try {

        const {name} = req.query;
        const pokemonsFound = await getPokemonByName(name)
        res.status(200).json(pokemonsFound)

    } catch (error) {

        res.status(404).json({error: error.message})
        
    }

}

module.exports = getPokemonByNameHandler 