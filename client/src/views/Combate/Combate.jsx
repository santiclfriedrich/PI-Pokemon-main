import { useLocation } from "react-router-dom";
import { calcularDanio, determinarGanador } from "../../components/Batalla/Batalla";
import { useSelector } from "react-redux";

// import { calcularDanio, determinarGanador } from "./battle";

const Combate = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const pokemon1Id = searchParams.get('pokemon1');
  const pokemon2Id = searchParams.get('pokemon2')  
  const allpokes = useSelector((state) => state?.pokemons);
  
  const pokemon1 = allpokes.find((pokemon) => pokemon.id === pokemon1Id );
  const pokemon2 = allpokes.find((pokemon) => pokemon.id === pokemon2Id )
  let ganadorPokemon = null;

  //Calcula el daño y determina el ganador
  if(pokemon1 && pokemon2){
    const danio1 = calcularDanio(pokemon1, pokemon2);
    const danio2 = calcularDanio(pokemon2, pokemon1)
    const ganador = determinarGanador(danio1, danio2)

    if(ganador) {
        ganadorPokemon = allpokes.find((pokemon) => pokemon.id === ganador.id )
    }

  }

  return (
    <div >
        
        <p>Pokemon 1: {pokemon1?.name}</p>
        <img src={pokemon1?.image} />

        <p>Pokemon 2: {pokemon2?.name} </p>
        <img src={pokemon2?.image} />

        <p> Ganador: {ganadorPokemon?.name} </p>
        {ganadorPokemon && (
            <img src={ganadorPokemon?.image} />
        )}

    </div>
  );
};

export default Combate