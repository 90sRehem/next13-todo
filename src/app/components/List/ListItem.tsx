// use client;

import { ITodo } from "@/app/types/ITodo";
import { DeleteButton } from "../Button";
import { Checkbox } from "../Checkbox";

export interface IListItemProps {
  todo: ITodo;
}

export function ListItem({ }: IListItemProps) {
  return (
    <li className='w-full'>
      <div className='flex items-start flex-row justify-between p-4 gap-3 bg-base-gray-500 border border-solid border-base-gray-400 shadow-md rounded-lg w-full min-h-[72px]'>
        <div className='flex items-center gap-4 w-full'>
          <Checkbox />
          <label
            htmlFor="checkbox"
            className='max-w-[632px] w-[90%] text-base-gray-100 break-all'
          >
            teste
          </label>
          <DeleteButton aria-label='delete' />
        </div>
      </div>
    </li>
  )
}