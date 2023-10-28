import { GET_POKEMON } from "./actions-types";

let initialState = {
    pokemons: [],
    newPokemons: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON:
            return{...state,
            pokemons: action.payload,
            newPokemons: [...action.payload]
            }

        default:
            return state
    }
}

export default reducer