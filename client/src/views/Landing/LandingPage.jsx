import {useNavigate} from 'react-router-dom';
import style from './LandingPage.module.css';

const Landing = () =>{

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

    return(
        <div className={style.landing} >
            <h1>Pokedex</h1>
            <button onClick={navigateHandler} >Home</button>
        </div>
    )

}

export default Landing