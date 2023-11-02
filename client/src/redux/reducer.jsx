import { GET_POKEMON, GET_BY_NAME, GET_BY_ID, ORDER_NAME_A_TO_Z, CREATE_NEW_POKEMON, TYPES } from "./actions-types";

let initialState = {
    newPokemons: [],
    pokemons: [],
    detailsPokemon: [],
    newTypes: []
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

        case ORDER_NAME_A_TO_Z:
            if(action.payload === 'A') {
                const allPokesCopy = [...state.pokemons]
                const result = allPokesCopy.sort( (a, b) => a.name.localCompare(b.name) );
                return{
                    ...state,
                    pokemons: [...result]
                }
            }
            if(action.payload === 'Z' ) {
                const allPokesCopy = [...state.pokemons];
                const result = allPokesCopy.sort( (a, b) => b.name.localCompare(a.name) )
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