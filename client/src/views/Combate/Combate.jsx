import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getPoke } from "../../redux/actions";

// import { calcularDanio, determinarGanador } from "./battle";

const Combate = () => {
  const allpokes = useSelector((state) => state?.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPoke());
  }, [dispatch]);

  return (
    <div >
        <Cards pokemons={allpokes} />
    </div>
  );
};

export default Combate