"use client";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { PlusCircle, Spinner } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    pending: boolean;
};

const mdClasses = "md:w-36 md:h-14"
const baseClasses = "flex flex-row justify-center items-center p-4 gap-2 font-bold h-full w-full bg-product-blue-dark rounded-lg border-none outline-none transition delay-75 hover:enabled:bg-product-blue"

export function Button({ children, pending, ...rest }: ButtonProps) {
    // const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className={`${baseClasses} ${mdClasses}`}
            {...rest}
        >
            {pending ? (
                <>
                    <Spinner className="animate-spin" />
                    {children}
                </>
            ) : (
                <>
                    {children}
                    < PlusCircle />
                </>
            )}
        </button>
    )
}