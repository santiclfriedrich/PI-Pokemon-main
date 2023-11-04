import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPoke, getPokeName } from "../../redux/actions";

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
        <div>
            <input type="text" onChange={handleName} value={name} />
            <button onClick={onClickHandler}>Buscar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default SearchBar