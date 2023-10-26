const newPokemon = require('../controllers/newPokemon');

const postPokemon = async (req, res) => {

    try {
        
        const {name, image, hp, attack, defense, height, weight, types} = req.body; 
        const pokemon = await newPokemon(name, image, hp, attack, defense, height, weight, types);
        res.status(200).json(pokemon)

    } catch (error) {

        res.status(400).json({ error: error.message })
        
    }

}

module.exports = postPokemon