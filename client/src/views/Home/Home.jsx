import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards';
import { filterApiToDb, getPoke, orderAz, orderAttack, allTypes, filterTypes, newImages } from '../../redux/actions';
import style from './Home.module.css'

//paginado
const POKEMON_PER_PAGE = 12;

const Home = () => {
    const allTYPE = useSelector((state) => state?.newTypes )
    const allPokemons = useSelector((state) => state?.pokemons )
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();

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


    //ordenamiento

    const orderHandler = (event) => {
        dispatch(orderAz(event.target.value));
        setCurrentPage(0)
    }

    const handlerOrderAttack = (event) => {
        setCurrentPage(0)
        dispatch(orderAttack(event.target.value))
    }

    const handlerDbApi = (event) => {
        const result = event.target.value
        setCurrentPage(0)
        dispatch(filterApiToDb(result))
    }

    const handlerFilter = (event) => {
        const selection = event.target.value;
        setTypes(selection);
        setCurrentPage(0)
        dispatch(filterTypes(selection))
    }

    useEffect(() => {
        dispatch(allTypes())
        dispatch(newImages())
    }, [dispatch])

    return(
        <div className={style.home}>

        <div className={style.homeContainer} >

        <select className={style.selectFilter} onChange={orderHandler} >
                <option value="todos">Todos</option>
                <option value="A">A - Z</option>
                <option value="Z">Z - A</option>
            </select>

            <select className={style.selectFilter} onChange={handlerOrderAttack}>
                <option value="ataqueMin">ataque min</option>
                <option value="ataqueMax">ataque max</option>
            </select>

            <select className={style.selectFilter} onChange={handlerDbApi}>
                <option value='todos'> API/DB </option>
                <option value='api'> API </option>
                <option value='db'> DB </option>
            </select>

            <select
                className={style.selectFilter}
                onChange={handlerFilter}>
                {allTYPE.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
            </select>

        </div>
            

            <Cards pokemons={pokeToDisplay} />

            <div className={style.pagesContain} >
                <button className={style.prevBut} onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
                <span> página: {currentPage + 1} de {totalPage} </span>
                <button className={style.nextBut} onClick={nextHandler} disabled={currentPage === totalPage - 1 }>Next</button>
            </div>


        </div>
    )
}

export default Home;