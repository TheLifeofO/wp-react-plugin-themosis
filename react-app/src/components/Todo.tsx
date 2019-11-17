import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useArray, useInput } from 'react-hanger'

export const TodoExample: FC = observer(() => {
  const newTodo = useInput('')
  const todos = useArray(['hi there', 'sup', 'world'])

  return (
    <div className="todo-example">
      <ul>
        {todos.value.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => todos.removeIndex(i)}>delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
      <button
        type="submit"
        disabled={!newTodo.hasValue}
        onClick={() => {
          todos.add(newTodo.value)
          newTodo.clear()
        }}
      >
        Add todo
      </button>
      <button onClick={todos.clear}> clear todos </button>
    </div>
  )
})
