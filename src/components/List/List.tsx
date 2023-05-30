import { ListHeading } from "./ListHeader";
import { ListItem } from "./ListItem";
import { EmptyList } from "./EmptyList";
import { listTodos, toggleTodo, removeTodo, Todo } from "@/app/api/todos";

export async function List() {
  const todos: Todo[] = [];

  return (
    <div className='flex flex-col items-center w-full max-w-3xl gap-6'>
      <ListHeading done={todos.filter(todo => todo.done).length} total={todos.length} />
      <ul className='flex flex-col items-center justify-center gap-4 w-full p-1 rounded-lg border-t-2 border-solid border-base-gray-400 outline-none'>
        {todos.length > 0 ? (
          todos.map(todo => (
            /* @ts-expect-error */
            <ListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </div>
  )
}