import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = ({ pokemons, handlePokeSelect  }) => {

    return(
        <div className={style.cards}>
            { pokemons.map(({ id, name, image, hp, attack, defense, height, weight, types }) => {

                return(
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    height={height}
                    weight={weight}
                    types={types}
                    handlePokeSelect={handlePokeSelect}
                    />
                )
            })
            }

        </div>
    )
}

export default Cards;