import React, { useState } from 'react';


const InputTodo = (props) => {
    console.log(props);
    const [value, setValue] = useState('');
    console.log(value);

    const handleClick = () => {
        console.log(value);
        if (value.trim() === '') {
            setValue('');
            return alert('Введите дело');
        } else {
            props.addTodo(value);
            setValue('');
            console.log(props.todos)
        }
    }
    
    return <div>
        <h2>Cписок дел</h2>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} id="input" autoComplete="off" placeholder="Введите дело" />
        <button onClick={handleClick}>Добавить</button>
    </div>

}
export { InputTodo };