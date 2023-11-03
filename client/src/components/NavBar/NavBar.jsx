import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/home')
    }

    const onClickHandler = () => {
        navigate('/form')
    }

    const onClickHandlerBatalla = () => {
        navigate('/combate')
    }

    return(
        <div>

            {location.pathname !== '/home' && location.pathname !== '/' 
                && <button onClick={navigateHandler}>Home</button>
            }

            {location.pathname === '/home'
                && <SearchBar />
            }

            {
                location.pathname === '/home'
                && <button onClick={onClickHandler}>Create</button>
            }
            {
                location.pathname === '/home' 
                && <button onClick={onClickHandlerBatalla}>Combate</button>
            }

        </div>
    )

}

export default NavBar