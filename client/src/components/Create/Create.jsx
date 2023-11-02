import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { createPokemon } from "../../redux/actions";


const CreateForm = () => {

    const allTypes = useSelector( (state) => state?.newTypes )
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [dataIsValid, setDataIsValid] = useState(false);

    const [data, setData] = useState({

        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        height: '',
        weight: '',
        types: []
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validation({
                ...data,
                [e.target.name]: e.target.value
            })
        )
    }

    const validateInfo = () =>{
        return(
            !errors.name &&
            !errors.attack &&
            !errors.defense &&
            !errors.height &&
            !errors.weight &&
            !errors.hp
        )
    }

    useEffect(() => {
        setDataIsValid(validateInfo());
    }, [errors])

    useEffect( () => {
        dispatch(allTypes())
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataIsValid){
            dispatch(createPokemon(data))
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >

                <label>Nombre</label>
                <input  type="text" name="name" value={data.name} onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}

                <label>Imagen</label>
                <input type="text" name="image" value={data.image} onChange={handleChange}  />

                <label>Vida</label>
                <input type="text" name="hp" value={data.hp} onChange={handleChange} />
                {errors.hp && <p>{errors.hp}</p>}

                <label>Ataque</label>
                <input type="text" name="attack" value={data.attack} onChange={handleChange} />
                {errors.attack && <p>{errors.attack}</p>   }

                <label>Defensa</label>
                <input type="text" name="defense" value={data.defense} onChange={handleChange} />
                {errors.defense && <p>{errors.defense}</p> }

                <label>Altura</label>
                <input type="text" name="height" value={data.height} onChange={handleChange} />
                {errors.height && <p>{errors.height}</p> }

                <label>Peso</label>
                <input type="text" name="weight" value={data.weight} onChange={handleChange}  />
                {errors.weight && <p>{errors.weight}</p> }

                <select
                name="types"
                value={data.types}
                onChange={handleChange}>
                    {allTypes.map(elem => <option name={elem.name} key={elem.key} value={elem.name}>{elem.name}</option>)}
                </select>

                <button disabled={!dataIsValid}>CREAR</button>

            </form>
        </div>
    )
}

export default CreateForm;