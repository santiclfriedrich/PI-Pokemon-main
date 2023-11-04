import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { calcularDanio } from "../../components/Batalla/Batalla";
import { useSelector } from "react-redux";


const Combate = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const pokemon1Id = searchParams.get('pokemon1');
  const pokemon2Id = searchParams.get('pokemon2')  
  const allpokes = useSelector((state) => state?.pokemons);
  
  const pokemon1 = allpokes.find((pokemon) => pokemon.id === pokemon1Id );
  const pokemon2 = allpokes.find((pokemon) => pokemon.id === pokemon2Id )
  
  const [peleaEnCurso, setPeleaEnCurso] = useState(false);
  const [ganador, setGanador] = useState(null);
  const [pokemon1HP, setPokemon1HP] = useState(100);
  const [pokemon2HP, setPokemon2HP] = useState(100)

  //Calcula el daño y determina el ganador
  const handleAttack = () => {

    const danio1 = calcularDanio(pokemon1, pokemon2);
    const danio2 = calcularDanio(pokemon2, pokemon1)
    
    setPokemon1HP((prevHP) => prevHP - danio2 );
    setPokemon2HP((prevHP) => prevHP - danio1 )


    if(pokemon1HP <= 0 || pokemon2HP ) {
      setPeleaEnCurso(false);

      if(pokemon1HP <= 0){
        setGanador(pokemon2)
      } else if (pokemon2HP <= 0 ){
        setGanador(pokemon1)
      }
    }

  }
    
  

  return (
    <div >
       
       <div>
    <p>Pokemon 1: {pokemon1?.name}</p>
    <img src={pokemon1?.image} alt={pokemon1?.name} />
    <p>Pokemon 2: {pokemon2?.name}</p>
    <img src={pokemon2?.image} alt={pokemon2?.name} />
    {peleaEnCurso && (
      <div>
        <p>Ataque: {pokemon1?.attack}</p>
        <p>Defensa: {pokemon1?.defense}</p>
        <p>Vida: {pokemon1HP}</p>
        <p>Ataque: {pokemon2?.attack}</p>
        <p>Defensa: {pokemon2?.defense}</p>
        <p>Vida: {pokemon2HP}</p>
      </div>
    )}
    {!peleaEnCurso && ganador && (
      <div>
        <p>Ganador: {ganador?.name}</p>
        <img src={ganador?.image} alt={ganador?.name} />
      </div>
    )}
  </div>
      <button onClick={() => setPeleaEnCurso(true)}>Iniciar pelea</button>
      <button onClick={handleAttack}>Atacar</button>

    </div>
  );
};

export default Combate