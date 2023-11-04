export const calcularDanio = (pokemonAtacante, pokemonDefensor) => {
    const danoBase = 10;
    const ataque = pokemonAtacante.attack;
    const defensa = pokemonDefensor.defense;
    const vidaDefensor = pokemonDefensor.hp;
  
    // Calcula el daño teniendo en cuenta la vida, el ataque y la defensa
    const dano = Math.max((ataque - defensa) + danoBase, 0);
  
    // Considera la vida del defensor en el cálculo del daño
    const danoFinal = Math.min(dano, vidaDefensor);
  
    return danoFinal;
  };