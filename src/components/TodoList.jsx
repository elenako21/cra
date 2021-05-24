import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = (props) => {

    console.log(props);
    const { todos, delTodo, toggleChecked } = props;
    console.log(todos);

    
    if (!todos.length) {
        return <p></p>
        
    } else {
        
        const list = todos.map(todo => <TodoItem {...todo} key={todo.id} delTodo={delTodo} toggleChecked={toggleChecked} />)
        console.log(list)
        return <div>
            {list}
            <p id="total"> Всего {todos.length} </p>
        </div>
        
        }
    }

export { TodoList };