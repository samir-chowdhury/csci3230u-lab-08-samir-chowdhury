
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo ${todo.done ? 'done' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>

      <button
        type="button"
        aria-label="Delete"
        onClick={() => onDelete(todo.id)}
      >
        ✕
      </button>
    </li>
  )
}
