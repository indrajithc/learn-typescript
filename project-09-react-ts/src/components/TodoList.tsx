import React from "react";

interface TodoListProps {
  items: { id:string, text: string}[]
}

const TodoList: React.FC<TodoListProps> = (props) => {

const {items } = props;
  return (
    <ul>
      {
        items.map(todo=>(
          <li key={todo.id}>{todo.text}</li>
        ))
      }
    </ul>
  )
}

export default TodoList;