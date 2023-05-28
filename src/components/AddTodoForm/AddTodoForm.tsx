"use client";

import { useRef, useTransition } from "react";
import { Button } from "../Button";
import { Form } from "../Form";

type AddTodoFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
    action: (data: FormData) => void;
}

export function AddTodoForm({ action: addTodo, ...rest }: AddTodoFormProps) {
    let [pending, startTransition] = useTransition();
    const todoRef = useRef<HTMLInputElement>(null);
    return (
        <Form action={addTodo} {...rest}>
            <fieldset className='flex flex-col gap-2 md:flex-row'>
                <Form.Input
                    ref={todoRef}
                    type='text'
                    name='new-todo'
                    placeholder='Criar uma nova tarefa'
                />
                <Button type='submit' disabled={pending}>Criar</Button>
            </fieldset>
        </Form>
    )
}