import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { calcularDanio } from "../../components/Batalla/Batalla";
import { useSelector } from "react-redux";
import style from "./Combate.module.css"


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
  const [pokemon1HP, setPokemon1HP] = useState(150);
  const [pokemon2HP, setPokemon2HP] = useState(150);
  const [showExplosion, setShowExplosion] = useState(false)

  //Calcula el daño y determina el ganador
  const handleAttack = () => {
    if (peleaEnCurso) {
      const danio1 = calcularDanio(pokemon1, pokemon2);
      const danio2 = calcularDanio(pokemon2, pokemon1);
      const nuevoPokemon1HP = Math.max(pokemon1HP - danio2, 0);
      const nuevoPokemon2HP = Math.max(pokemon2HP - danio1, 0);

      setPokemon1HP(nuevoPokemon1HP);
      setPokemon2HP(nuevoPokemon2HP);

      // Muestra el emoji de explosión 💥
      setShowExplosion(true);

      // Oculta el emoji después de 1 segundo
      setTimeout(() => {
        setShowExplosion(false);
      }, 1000);

      if (nuevoPokemon1HP <= 0 || nuevoPokemon2HP <= 0) {
        setPeleaEnCurso(false);
        if (nuevoPokemon1HP <= 0) {
          setGanador(pokemon2);
        } else if (nuevoPokemon2HP <= 0) {
          setGanador(pokemon1);
        } else {
          setGanador("Empate");
        }
      }
    }
  };
    
  const iniciarPelea = () => {
    if (!peleaEnCurso) {
      setPokemon1HP(150);
      setPokemon2HP(150);
      setPeleaEnCurso(true);
    }
  };

  useEffect(() => {
    if (!pokemon1 || !pokemon2) {
    }
  }, [pokemon1, pokemon2]);

  return (
    <div className={style.body}>
      <div className={style.combateContainer}>
        <div className={`${style.poke1Container} `}>
          <div className={style.poke1}>
            <p>Pokemon 1: {pokemon1?.name}</p>
            <img src={pokemon1?.image} alt={pokemon1?.name} className={showExplosion ? style.attackAnimation : ''} />
            {showExplosion && <span className={style.explosion}>💥</span>}
            {peleaEnCurso && (
              <div className={style.lifeBar}>
                <div
                  className={style.lifeProgress}
                  style={{ width: `${(pokemon1HP / 150) * 100}%` }}
                ></div>
              </div>
            )}
            <p>Ataque: {pokemon1?.attack}</p>
            <p>Defensa: {pokemon1?.defense}</p>
          </div>
        </div>

        <div className={`${style.poke2Container} `}>
          <div className={style.poke2}>
            <p>Pokemon 2: {pokemon2?.name}</p>
            <img src={pokemon2?.image} alt={pokemon2?.name} className={showExplosion ? style.attackAnimation : ''} />
            {showExplosion && <span className={style.explosion}>💥</span>}
            {peleaEnCurso && (
              <div className={style.lifeBar}>
                <div
                  className={style.lifeProgress}
                  style={{ width: `${(pokemon2HP / 150) * 100}%` }}
                ></div>
              </div>
            )}
            <p>Ataque: {pokemon2?.attack}</p>
            <p>Defensa: {pokemon2?.defense}</p>
          </div>
        </div>

        {!peleaEnCurso && ganador && (
          <div className={style.ganadorContainer}>
            <img className={style.ganadorImage} src={ganador?.image} alt={ganador?.name} />
            <p>Ganador: {ganador?.name}</p>
          </div>
        )}

        <div className={style.botonContainer}>
          <button className={style.boton1} onClick={handleAttack}>Atacar</button>
          <button className={style.boton1} onClick={iniciarPelea}>Iniciar pelea</button>
        </div>
      </div>
    </div>
  );
}

export default Combate