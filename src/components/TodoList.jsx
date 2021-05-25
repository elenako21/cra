import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = (props) => {

    const { todos, delTodo, toggleChecked } = props;

    if (!todos.length) {
        return <p></p>
    } else {
        const list = todos.map(todo => <TodoItem {...todo} key={todo.id} delTodo={delTodo} toggleChecked={toggleChecked} />)
        
        return <div className="todoList">
            {list}
            <p id="total"> Всего {todos.length} </p>
        </div>
        
        }
    }

export { TodoList };