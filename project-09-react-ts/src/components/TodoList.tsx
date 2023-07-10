import React from "react";

interface TodoListProps {
  items: { id:string, text: string}[];
  onDeleteTodo: (id:string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {

const {items, onDeleteTodo } = props;
  return (
    <ul>
      {
        items.map(todo=>(
          <li key={todo.id}><span>{todo.text}</span>
          <button type="button" onClick={onDeleteTodo.bind(null, todo.id)}>X</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList;