export interface IListHeadingProps {
  done: number;
  total: number;
}

export function ListHeading({
  done = 0,
  total = 0,
}: IListHeadingProps) {
  return (
    <div className='flex items-center justify-between flex-wrap w-full'>
      <strong className='flex items-center justify-center gap-2 font-bold leading-4 text-product-blue'>
        Tarefas criadas
        <p
          className='w-auto py-0 px-2 font-bold rounded-full text-base-gray-200 bg-base-gray-400 inline-block'
        >
          {total}
        </p>
      </strong>
      <strong className='flex items-center justify-center gap-2 font-bold leading-4 text-product-purple'>
        Concluídas
        <p
          className='w-auto py-0 px-2 font-bold rounded-full text-base-gray-200 bg-base-gray-400 inline-block'
        >
          {done}
        </p>
      </strong>
    </div>
  )
}