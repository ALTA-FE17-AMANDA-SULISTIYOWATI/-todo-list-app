import React, { useState } from "react"
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa"
import "./App.css"

interface Todo {
  id: number | Date
  todo: string
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, todo: "Learn React" }])
  const [input, setInput] = useState<string>("")
  const [editIndex, setEditIndex] = useState<number>(-1)

  const setEdit = (index: number) => {
    setInput(todos[index].todo)
    setEditIndex(index)
  }

  const addTodo = async () => {
    try {
      if (input.trim() !== "") {
        setTodos([...todos, { id: new Date(), todo: input }])
        setInput("")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const updateTodo = async () => {
    try {
      if (input.trim() !== "") {
        const updatedTodos = [...todos]
        updatedTodos[editIndex].todo = input
        setTodos(updatedTodos)
        setEditIndex(-1)
        setInput("")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const removeTodo = (id: number | Date) => {
    const filteredTodos: Todo[] = todos.filter((todo) => todo.id !== id)
    console.log(filteredTodos)
    setTodos(filteredTodos)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover">
        <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
          <h1 className="text-3xl font-bold text-center">Todo App</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="add a todo"
              className="py-2 px-4 border rounded w-full focus:outline-none mr-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={editIndex === -1 ? addTodo : updateTodo}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded"
            >
              {editIndex === -1 ? <FaPlus /> : <FaPencilAlt />}
            </button>
          </div>
        </div>

        {todos.length > 0 && (
          <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded shadow-md mb-3"
                >
                  <span className="text-lg">{todo.todo}</span>
                  <div>
                    <button
                      onClick={() => setEdit(index)}
                      className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:to-gray-700"
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-500 hover:to-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
