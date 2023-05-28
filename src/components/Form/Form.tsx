import { PropsWithChildren } from "react";
import { Input } from "./Input";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...rest }: PropsWithChildren<FormProps>) {
    return (
        <form className="w-full h-full md:max-w-3xl" {...rest}>
            {children}
        </form>
    )
}

Form.Input = Input;