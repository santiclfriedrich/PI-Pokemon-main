import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPoke, getPokeName } from "../../redux/actions";
import style from './SearchBar.module.css'

const SearchBar = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const onClickHandler = async () => {
         dispatch(getPokeName(name));
        setName('');
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const reset = () => {
        dispatch(getPoke())
    }

    return(
        <div className={style.searchContainer} >
            <input className={style.searchInput} type="text" onChange={handleName} value={name} />
            <button className={style.searchButton} onClick={onClickHandler}>Buscar</button>
            <button className={style.resetButton} onClick={reset}>Reset</button>
        </div>
    )

}

export default SearchBar