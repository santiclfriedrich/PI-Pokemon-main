import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokeId } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokeDetails = useSelector((state) => state?.detailsPokemon )

    useEffect(() => {
        dispatch(getPokeId(id));
    }, [id] )

    return(
        <div>
            <div>
            <h2>Nombre: {pokeDetails?.name}</h2>
                <img src={pokeDetails?.image} />
                <h2>Vida: {pokeDetails?.hp}</h2>
                <h2>Ataque: {pokeDetails?.attack}</h2>
                <h2>Defense: {pokeDetails?.defense}</h2>
                <h2>Altura: {pokeDetails?.height}</h2>
                <h2>Peso: {pokeDetails?.weight}</h2>
                <h2>Tipo: {pokeDetails?.types && pokeDetails?.types.join(', ') }</h2>
            </div>
           
        </div>
    )
}

export default Detail;