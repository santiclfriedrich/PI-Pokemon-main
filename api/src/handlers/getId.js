const getPokemonById = require('../controllers/getPokemonById');

const getPokemonbyIdHandler = async (req, res) => {

    try {

        const { idPokemon } = req.params;
        const pokemons = await getPokemonById(idPokemon);
        res.status(200).json(pokemons)

    } catch (error) {
        
        res.status(404).json({ error: error.message })

    }

}

module.exports = getPokemonbyIdHandler ;