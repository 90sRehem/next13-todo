"use client";   
import { ForwardRefRenderFunction, forwardRef } from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    errorMessage?: string;
}

const CustomInput: ForwardRefRenderFunction<
    HTMLInputElement,
    IInputProps
> = ({
    name,
    placeholder,
    errorMessage,
    ...rest },
    ref) => {
        return (
            <div className="flex flex-col items-start justify-center w-full">
                <input
                    name={name}
                    placeholder={placeholder}
                    ref={ref}
                    className="flex p-4 h-14 bg-base-gray-500 border-base-gray-700 border border-solid rounded-lg text-base-gray-100 w-full active:border-product-purple-dark focus:border-product-purple-dark outline-none transition delay-75 hover:enabled:bg-base-gray-600 disabled:cursor-not-allowed placeholder:text-base-gray-300"
                    {...rest} />
                <label
                    htmlFor={name}
                    data-visible={!!errorMessage}
                    className="min-w-full data-[visible=false]:invisible"
                >
                    {errorMessage}
                </label>
            </div>
        )
    }

export const Input = forwardRef(CustomInput)