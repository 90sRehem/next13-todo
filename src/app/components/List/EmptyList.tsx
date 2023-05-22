import { ClipboardText } from "@phosphor-icons/react";

export function EmptyList() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 w-full h-full px-6 py-16 text-center">
      <ClipboardText className="text-base-gray-400 w-[calc(var(--tw-space-x-12) - var(--tw-space-x-2))] h-[calc(var(--tw-space-x-4) - var(--tw-space-x-2))]" />
      <p className="font-normal text-base leading-3 text-base-gray-400">
        <strong className="block">Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}