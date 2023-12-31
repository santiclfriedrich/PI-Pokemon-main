import axios from 'axios'
import { GET_POKEMON, GET_BY_NAME, GET_BY_ID, ORDER_ATTACK, ORDER_NAME_A_TO_Z, CREATE_NEW_POKEMON, FILTER_API_DB, TYPES, FILTER_TYPES, IMAGE } from './actions-types'

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

export const createPokemon = (data) =>{
    return async (dispatch) => {
        try {

            const response = await axios.post(`http://localhost:3001/pokemons`, data)
            alert('ya se creó')
            dispatch({
                type: CREATE_NEW_POKEMON,
                payload: response.data,
            });
            
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const allTypes = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/types`)
        dispatch({
            type: TYPES,
            payload: response.data,
        })
    }
}

export const newImages = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/images`);
        dispatch({
            type: IMAGE,
            payload: response.data
        })
    }
}

export const filterTypes = (name) => {
    return{
        type: FILTER_TYPES, payload: name
    }
}

export const filterApiToDb = (value) => {
    return{
        type: FILTER_API_DB,
        payload: value
    }
}

export const orderAz = (order) => {
    return{
        type: ORDER_NAME_A_TO_Z,
        payload: order
    }
}

export const orderAttack = (order) => {
    return{
        type: ORDER_ATTACK,
        payload: order
    }
}