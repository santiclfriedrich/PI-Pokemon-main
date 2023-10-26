const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {PokemonsHandler} = require('../handlers/getPokemons');
const {getPokemonbyIdHandler} = require('../handlers/getId')
const {getPokemonByNameHandler} = require('../handlers/getName')
const postPokemon = require('../handlers/postPokemon')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.get('/pokemons/name', getPokemonByNameHandler)
router.get('/pokemon/:id', getPokemonbyIdHandler);
router.get('/pokemons', PokemonsHandler);
router.post('/pokemons', postPokemon)



module.exports = router;
