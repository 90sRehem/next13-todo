import { PropsWithChildren } from "react";
import { Input } from "./Input";

interface IFormProps { }

export function Form({ children }: PropsWithChildren<IFormProps>) {
    return (
        <form className="w-full h-full md:max-w-3xl">
            {children}
        </form>
    )
}

Form.Input = Input;