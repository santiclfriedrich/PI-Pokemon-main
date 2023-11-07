import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';

const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/home')
    }

    const onClickHandler = () => {
        navigate('/form')
    }

    

    return(
        <div>

            {location.pathname !== '/home' && location.pathname !== '/' 
                && <button className={style.buttonHome} onClick={navigateHandler}>Home</button>
            }

            {location.pathname === '/home'
                && <SearchBar />
            }

            {
                location.pathname === '/home'
                && <button className={style.navCreate} onClick={onClickHandler}>Create Pokemon</button>
            }
            

        </div>
    )

}

export default NavBar