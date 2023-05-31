"use client"
import { FindTodoDTO, Todo } from "@/schema";
import { DeleteButton } from "../Button";
import { Checkbox } from "../Checkbox";
import { useTransition } from "react";

export interface IListItemProps {
  todo: Todo;
  // eslint-disable-next-line no-unused-vars
  toggleTodo: (props: FindTodoDTO) => Promise<Todo>;
  // eslint-disable-next-line no-unused-vars
  removeTodo: (props: FindTodoDTO) => Promise<FindTodoDTO>;
}

export function ListItem({
  todo,
  toggleTodo,
  removeTodo
 }: IListItemProps) {
  let [pending, startTransition] = useTransition();
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
            pending={pending}
            onClick={async () => {
              startTransition(async () => {
                await removeTodo({
                  slug: todo.slug
                })
              })
            }}
          />
        </div>
      </div>
    </li>
  )
}