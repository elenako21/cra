import React from 'react';

const TodoItem = (props) => {
    
    const { id, title, isComplete, delTodo, toggleChecked } = props;
    
        return <div>
            <input type="checkbox" checked={isComplete}  onChange={() => { toggleChecked(id) }} />
            <span className='todoItem'>{title}</span>
            <i className="fas fa-trash-alt" onClick={() => { delTodo(id)}} />
        </div>
    }

export { TodoItem };