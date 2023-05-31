"use client";

import { Spinner, Trash } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react";

type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    pending: boolean;
}

export function DeleteButton({ pending, ...props }: DeleteButtonProps) {
    return (
        <button className="flex items-center justify-center w-6 h-6" {...props}>
            {pending ? (
                <Spinner className="animate-spin" />
            ) : (
                <Trash className="w-5 h-5 text-base-gray-300 hover:text-base-danger" />
            )}
        </button>
    );
}