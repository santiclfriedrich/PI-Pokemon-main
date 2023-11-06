import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards';
import { filterApiToDb, getPoke, orderAz, orderAttack, allTypes, filterTypes } from '../../redux/actions';
import { useNavigate } from "react-router-dom";
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

    //combate

    const [selectedPokemon1, setSelectedPokemon1] = useState(null);
    const [selectedPokemon2, setSelectedPokemon2] = useState(null);
    const navigate = useNavigate();

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


    //seleccion de pokemones para combate
    const handlePokemonSelect = (pokemon) => {
        if (!selectedPokemon1) {
          setSelectedPokemon1(pokemon);
        } else if (!selectedPokemon2) {
          setSelectedPokemon2(pokemon);
        }
      }

      //inicio de batalla
      const startBattle = () => {
        if (selectedPokemon1 && selectedPokemon2) {
          navigate(`/combate?pokemon1=${selectedPokemon1.id}&pokemon2=${selectedPokemon2.id}`);
        } else {
          alert('Selecciona dos Pokémon para iniciar la batalla.');
        }
      };


    //ordenamiento

    const orderHandler = (event) => {
        dispatch(orderAz(event.target.value));
    }

    const handlerOrderAttack = (e) => {
        dispatch(orderAttack(e.target.value))
    }

    const handlerDbApi = (e) => {
        const result = e.target.value
        dispatch(filterApiToDb(result))
    }

    const handlerFilter = (e) => {
        const selection = e.target.value;
        setTypes(selection);
        dispatch(filterTypes(selection))
    }

    useEffect(() => {
        dispatch(allTypes())
    }, [dispatch])

    return(
        <div className={style.home}>
            <h1>Home</h1>

            <select onChange={orderHandler} >
                <option value="todos">Todos</option>
                <option value="A">A - Z</option>
                <option value="Z">Z - A</option>
            </select>

            <select onChange={handlerOrderAttack}>
                <option value="ataqueMin">ataque min</option>
                <option value="ataqueMax">ataque max</option>
            </select>

            <select onChange={handlerDbApi}>
                <option value='todos'> API/DB </option>
                <option value='api'> API </option>
                <option value='db'> DB </option>
            </select>

            <select
                onChange={handlerFilter}>
                {allTYPE.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
            </select>

            <button onClick={startBattle}>Iniciar Batalla</button>

            <Cards pokemons={pokeToDisplay} handlePokemonSelect={handlePokemonSelect} />

            <div>
                <button onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
                <span> página: {currentPage + 1} de {totalPage} </span>
                <button onClick={nextHandler} disabled={currentPage === totalPage - 1 }>Next</button>
            </div>


        </div>
    )
}

export default Home;