
import { useState } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const initialTodos = [
  { id: 1, text: 'Read the lab README', done: true },
  { id: 2, text: 'Build the to-do list', done: false },
  { id: 3, text: 'Add one of your own', done: false },
]

// AI-assisted — see AI-USAGE.md #1
export default function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [filter, setFilter] = useState('all')

  function addTodo(text) {
    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), text, done: false },
    ])
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    )
  }

  const completed = todos.filter(todo => todo.done).length
  const visible = todos.filter(todo =>
    filter === 'active' ? !todo.done : filter === 'completed' ? todo.done : true
  )

  return (
    <main className="app">
      <h1>My To-Dos</h1>

      <AddTodoForm onAdd={addTodo} />

      <p className="count">{completed} of {todos.length} done</p>

      <div className="filter-bar" role="group" aria-label="Filter todos">
        {['all', 'active', 'completed'].map(option => (
          <button
            key={option}
            type="button"
            className={filter === option ? 'active' : ''}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <TodoList
        todos={visible}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </main>
  )
}
