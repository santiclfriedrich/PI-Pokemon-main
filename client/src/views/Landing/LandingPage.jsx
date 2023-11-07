import {useNavigate} from 'react-router-dom';
import style from './LandingPage.module.css';
import landingImage from '../../assets/pokemon.png'

const Landing = () =>{

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

    return(
        <div className={style.landing} >
            <img className={style.landingImg} src={landingImage} alt="" />
            <h1>Bienvenidos a la pokeApp!</h1>
            <button className={style.buttonLand} onClick={navigateHandler} >Home</button>
        </div>
    )

}

export default Landing