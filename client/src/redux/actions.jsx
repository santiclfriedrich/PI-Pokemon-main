import axios from 'axios'
import { GET_POKEMON } from './actions-types'

export const getPoke = () => {

    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/pokemons`)

        dispatch({
            type: GET_POKEMON,
            payload: response.data
        })
    }

}