"use client";

import { Trash } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function DeleteButton(props: DeleteButtonProps) {
    return (
        <button className="flex items-center justify-center w-6 h-6" {...props}>
            <Trash className="w-5 h-5 text-base-gray-300 hover:text-base-danger" />
        </button>
    );
}