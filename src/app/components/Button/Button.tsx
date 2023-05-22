"use client";

import { PlusCircle } from "@phosphor-icons/react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const mdClasses = "md:w-24 md:h-14"
const baseClasses = "flex flex-row justify-center items-center p-4 gap-2 font-bold h-full w-full bg-product-blue-dark rounded-lg border-none outline-none transition delay-75 hover:enabled:bg-product-blue"

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            className={`${baseClasses} ${mdClasses}`}
            {...rest}>
            {children}
            <PlusCircle />
        </button>
    )
}