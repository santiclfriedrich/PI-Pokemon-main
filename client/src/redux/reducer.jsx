import { GET_POKEMON, GET_BY_NAME, GET_BY_ID, ORDER_ATTACK, ORDER_NAME_A_TO_Z, CREATE_NEW_POKEMON, FILTER_API_DB, TYPES, FILTER_TYPES, IMAGE } from "./actions-types";

let initialState = {
    newPokemons: [],
    pokemons: [],
    detailsPokemon: [],
    newTypes: [],
    allImages: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_POKEMON:
            return{
            ...state,
            newPokemons: action.payload,
            pokemons: action.payload,
            }

        case CREATE_NEW_POKEMON:
            return{
                ...state,
                newPokemons: [...state.newPokemons, action.payload],
                pokemons: [...state.pokemons, action.payload]
            }

        case TYPES:
            return{
                ...state,
                newTypes: action.payload
            }

        case GET_BY_NAME:
            return{
                ...state,
                newPokemons: action.payload,
                pokemons: action.payload,
            }

        case GET_BY_ID:
            return{
                ...state,
                detailsPokemon: action.payload
            }

        case IMAGE:
            return{
                ...state,
                allImages: action.payload
            }

        //filtrados

        case FILTER_API_DB:

            let pokemonsFiltrados;

            if (action.payload = 'api'){
                pokemonsFiltrados = state.pokemons.filter((poke) =>
                poke.id.toString().length < 6 )
            } else if (action.payload === 'db'){
                pokemonsFiltrados = state.pokemons.filter((poke) => 
                poke.id.toString().length > 6 )
            }

            return{
                ...state,
                pokemons: [...pokemonsFiltrados]
            }


        case FILTER_TYPES:
            const copyType = [...state.newPokemons]
            const response = [...copyType.filter((poke) => {
                return poke.types && poke.types.split(',').map(element =>
                    element.trim()).includes(action.payload)
                })]
            return{
                ...state,
                pokemons: response
            }

        //ordenamientos

        case ORDER_NAME_A_TO_Z:
            if(action.payload === 'A') {
                const allPokesCopy = [...state.pokemons]
                const result = allPokesCopy.sort( (a, b) => a.name.localeCompare(b.name) );
                return{
                    ...state,
                    pokemons: [...result]
                }
            }
            if(action.payload === 'Z' ) {
                const allPokesCopy = [...state.pokemons];
                const result = allPokesCopy.sort( (a, b) => b.name.localeCompare(a.name) )
                return{
                    ...state,
                    pokemons: [...result]
                }
            }

        case ORDER_ATTACK:
            if(action.payload === 'ataqueMin') {
                const allCopy = [...state.pokemons];
                const result = allCopy.sort((a,b) => a.attack - (b.attack) );
                return{
                    ...state,
                    pokemons: [...result]
                };
            }
            if(action.payload === 'ataqueMax'){
                const allCopy = [...state.pokemons];
                const result = allCopy.sort((a, b) => b.attack - (a.attack) );
                return{
                    ...state,
                    pokemons: [...result]
                }
            }

        default:
            return state
    }
}

export default reducer