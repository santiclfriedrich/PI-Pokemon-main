import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = ({ pokemons  }) => {

    return(
        <div className={style.cardlist}>
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
                    />
                )
            })
            }

        </div>
    )
}

export default Cards;