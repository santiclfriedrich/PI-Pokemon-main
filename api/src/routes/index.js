const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {PokemonsHandler} = require('../handlers/getPokemons');
const {getPokemonbyIdHandler} = require('../handlers/getPokemonById')



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.get('/pokemons', PokemonsHandler)
router.get('/pokemon/:id', getPokemonbyIdHandler)

module.exports = router;
