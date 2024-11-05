import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { text: newTodo, completed: false }]);
          setNewTodo('');
        }
      };

      const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
      };

      const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      };

      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Todo App</h1>
          <div className="w-full max-w-md">
            <div className="flex mb-4">
              <input
                type="text"
                className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
            <ul className="space-y-2">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`bg-white px-4 py-2 rounded-md shadow-md flex items-center justify-between ${
                    todo.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={todo.completed}
                      onChange={() => toggleTodo(index)}
                    />
                    <span>{todo.text}</span>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
