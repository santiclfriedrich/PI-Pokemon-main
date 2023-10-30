import axios from 'axios'
import { GET_POKEMON, GET_BY_NAME } from './actions-types'

export const getPoke = () => {

    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/pokemons`)

        dispatch({
            type: GET_POKEMON,
            payload: response.data
        })
    }

}

export const getPokeName = (name) => {

    return async (dispatch) => {
        try {

            const response = await axios.get(`http://localhost:3001/name?name=${name}`)

            dispatch({
                type: GET_BY_NAME,
                payload: response.data
            })
            
        } catch (error) {
            alert(`No se encontró ningún Pokemon con el nombre "${name}"`)
        }
    }

}