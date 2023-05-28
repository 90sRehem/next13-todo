"use client"
import { DeleteButton } from "../Button";
import { Checkbox } from "../Checkbox";
import { FindTodoDTO, Todo } from "@/app/api/todos";

export interface IListItemProps {
  todo: Todo;
  toggleTodo: ({ slug }: FindTodoDTO) => Promise<Todo>;
  removeTodo: ({ slug }: FindTodoDTO) => Promise<FindTodoDTO>;
}

export function ListItem({
  todo,
  toggleTodo,
  removeTodo
 }: IListItemProps) {
  return (
    <li className='w-full'>
      <div className='flex items-start flex-row justify-between p-4 gap-3 bg-base-gray-500 border border-solid border-base-gray-400 shadow-md rounded-lg w-full min-h-[72px]'>
        <div className='flex items-center gap-4 w-full'>
          <Checkbox
            checked={todo.done}
            onClick={() => {
              toggleTodo({
                slug: todo.slug
              })
            }}
          />
          <label
            htmlFor="checkbox"
            className='max-w-[632px] w-[90%] text-base-gray-100 break-all'
          >
            {todo.title}
          </label>
          <DeleteButton
            aria-label='delete'
            type="button"
            onClick={() => removeTodo({ slug: todo.slug })}
          />
        </div>
      </div>
    </li>
  )
}