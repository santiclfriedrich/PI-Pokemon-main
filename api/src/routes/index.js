const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsHandler = require('../handlers/getPokemons');
const getPokemonbyIdHandler = require('../handlers/getId');
const getPokemonByNameHandler = require('../handlers/getName');
const postPokemon = require('../handlers/postPokemon');
const getTypeHandler = require('../handlers/getTypes');
const imageHandler = require('../handlers/imgPokemon')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const mainRouter = Router();

mainRouter.get('/name', getPokemonByNameHandler)
mainRouter.get('/pokemons/:idPokemon', getPokemonbyIdHandler);
mainRouter.get('/pokemons', PokemonsHandler);
mainRouter.post('/pokemons', postPokemon);
mainRouter.get('/types', getTypeHandler);
mainRouter.get('/images', imageHandler);



module.exports = mainRouter;
