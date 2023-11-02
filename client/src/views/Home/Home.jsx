import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards';
import { getPoke, orderAz } from '../../redux/actions';

//paginado
const POKEMON_PER_PAGE = 10;

const Home = () => {

    const allPokemons = useSelector((state) => state?.pokemons )
    const dispatch = useDispatch()

    const totalPokemons = allPokemons?.length;
    const totalPage = Math.ceil(totalPokemons / POKEMON_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        dispatch(getPoke());
    }, [dispatch]);

    const outsetPokes = currentPage * POKEMON_PER_PAGE;
    const endPokes = outsetPokes + POKEMON_PER_PAGE;
    const pokeToDisplay = allPokemons?.slice(outsetPokes, endPokes);

    const nextHandler = () =>{
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    } 

    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const orderHandler = (event) => {
        dispatch(orderAz(event.target.value));
    }

    return(
        <div>
            <h1>Home</h1>

            <select onChange={orderHandler} >
                <option value="A">A - Z</option>
                <option value="Z">Z - A</option>
            </select>

            <Cards pokemons={pokeToDisplay} />

            <div>
                <button onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
                <span> Pagina: {currentPage + 1} de {totalPage} </span>
                <button onClick={nextHandler} disabled={currentPage === totalPage - 1 }>Next</button>
            </div>

        </div>
    )
}

export default Home;