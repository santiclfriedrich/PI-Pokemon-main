import { Link } from 'react-router-dom';

import style from './Card.module.css';

const Card = ({ id, name, image, types }) => {

    return(
        <div className={style.card} >
            <Link to={`/detail/${id}`} className={style.cardLink} >
                <h2 className={style.cardTitle}>{name}</h2>
                <img className={style.img} src={image}/>
            <p className={style.cardType} >Tipos : {types}</p>
            </Link>

            
        </div>
    )

}

export default Card;