"use client"
import { ITodo } from "@/app/types/ITodo";
import { ListHeading } from "./ListHeader";
import { ListItem } from "./ListItem";
import { EmptyList } from "./EmptyList";

export interface IListProps {
  todos: ITodo[];
}

export function List({ todos }: IListProps) {
  return (
    <div className='flex flex-col items-center w-full max-w-3xl gap-6'>
      <ListHeading done={0} total={0} />
      <ul className='flex flex-col items-center justify-center gap-4 w-full p-1 rounded-lg border-t-2 border-solid border-base-gray-400 outline-none'>
        {todos.length > 0 ? (
          todos.map(todo => (
            <ListItem key={todo.id} todo={todo} />
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </div>
  )
}