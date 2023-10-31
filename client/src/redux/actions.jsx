import axios from 'axios'
import { GET_POKEMON, GET_BY_NAME, GET_BY_ID, ORDER_NAME_A_TO_Z } from './actions-types'

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

export const getPokeId = (id) => {
    return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        dispatch({
            type: GET_BY_ID,
            payload: response.data
        })
    }
}

export const orderAz = (order) => {
    return{
        type: ORDER_NAME_A_TO_Z,
        payload: order
    }
}