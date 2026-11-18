import { useState } from 'react'

// AI-assisted — see AI-USAGE.md #1
export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        name="text"
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
