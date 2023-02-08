import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      text: e.target.todo.value,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="todo"  placeholder="Add todo...."/>
        <button className="b-add" type="submit">Add Todo</button>
      </form>
      <input type="text" value={search} onChange={handleSearch} placeholder="search...." />
      <ul>
        {filteredTodos.map((todo) => (
          <li className="list" key={todo.id}>
            {todo.text}{" "}
            <button className="b-del" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
