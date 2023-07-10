import React, { useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const  App: React.FC = () => {
  
const [todos, setTodos] = useState<{id: string; text:string}[]>([])  

  const todoAddHandler = (text: string) => {
    setTodos([
      {id: Math.random().toString(), text}
    ])
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
    <TodoList items={todos}/>
    </div>
  );
}

export default App;
