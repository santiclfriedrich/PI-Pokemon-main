const validation = (data) => {

    const errors = {};

    if (!/^[A-Za-z]{1,25}$/i.test(data.name)) {
        errors.name = 'Debe contener solo letras y no exceder los 25 caracteres';
    }

    if (!/^\d{1,4}$/.test(data.attack)) {
        errors.attack = 'El ataque debe ser un número de hasta 4 dígitos';
    }

    if (!/^\d{1,4}$/.test(data.defense)) {
        errors.defense = 'La defensa debe ser un número de hasta 4 dígitos';
    }

    if (!/^\d{1,4}$/.test(data.height)) {
        errors.height = 'La altura debe ser un número de hasta 4 dígitos';
    }

    if (!/^\d{1,4}$/.test(data.weight)) {
        errors.weight = 'El peso debe ser un número de hasta 4 dígitos';
    }

    // Validación de años de vida
    if (!/^\d{1,4}$/.test(data.hp)) {
        errors.hp = 'Los años de vida deben ser un número de hasta 4 dígitos';
    }
    return errors;

}

export default validation