import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards';
import { getPoke } from '../../redux/actions';

const Home = () => {

    const allPokemons = useSelector((state) => state?.pokemons )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPoke());
    }, [dispatch]);

    return(
        <div>
            <h1>Home</h1>
            <Cards pokemons={allPokemons} />
        </div>
    )
}

export default Home;