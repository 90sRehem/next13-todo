"use client";
import { useTransition, useRef } from "react";
import { Button } from "./Button";
import { Form } from "./Form";

type FieldSetProps = {
    action: (title: string) => Promise<void>;
}

export function FieldSet({ action }: FieldSetProps) {
    let [pending, startTransition] = useTransition();
    const todoRef = useRef<HTMLInputElement>(null);
    return (
        <fieldset className='flex flex-col gap-2 md:flex-row'>
            <Form.Input
                ref={todoRef}
                type='text'
                name='new-todo'
                placeholder='Criar uma nova tarefa'
            />
            <Button
                type='submit'
                pending={pending}
                disabled={pending}
                onClick={async () => {
                    startTransition(async () => {
                        await action(todoRef.current!.value)
                    })
                }}>
                {pending ? "Criando..." : "Criar"}
            </Button>
        </fieldset>
    )
}