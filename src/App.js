import React, {useState, useEffect} from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';

function App() {
  
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => setTodos([...todos, { id: Date.now(), title: todo, isComplete: false}]);
  const delTodo = (id) => setTodos(todos.filter(item => item.id !== id) );
  const toggleChecked = (id) => setTodos(todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete }
    } else {
      return { ...todo }
    }
  }));

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, //eslint-disable-next-line
  []);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="App">
      <div className="allblock">
      <InputTodo todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} addTodo={addTodo} delTodo={delTodo} toggleChecked={toggleChecked} />
    </div>
  </div>
  );
}

export default App;
