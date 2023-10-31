import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPoke, getPokeName } from "../../redux/actions";

const SearchBar = ({setCurrentPage}) => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const onClickHandler = async () => {
        const response = await dispatch(getPokeName(name));
        setName('');
        setCurrentPage(0)
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