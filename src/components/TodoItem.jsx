import React from 'react';

const TodoItem = (props) => {
    console.log(props);
    
    const { id, title, isComplete, delTodo, toggleChecked } = props;
    console.log(isComplete)
        return <div>
            <input type="checkbox" checked={isComplete}  onChange={() => { toggleChecked(id) }} />
            <span className='span'>{title}</span>
            <i className="fas fa-trash-alt" onClick={() => { delTodo(id)}} />
        </div>
    }

export { TodoItem };