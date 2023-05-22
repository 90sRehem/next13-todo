"use client";
import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CustomCheckbox: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  CheckboxPrimitive.CheckboxProps
> = ({ ...props }, forwardedRef) => {
  const rootUnchecked = [
    "w-5",
    "h-5",
    "bg-transparent",
    "rounded-full",
    "line-height-0",
    "cursor-pointer",
    "overflow-hidden",
    "box-border",
    "flex",
    "justify-center",
    "items-center",
    "border",
    "border-solid",
    "border-product-blue",
    "hover:bg-product-blue-dark",

  ].join(" ");

  const rootChecked = [
    "data-[state='checked']:border-product-purple",
    "data-[state='checked']:border-2",
    "data-[state='checked']:border-solid",
  ].join(" ");


  const indicatorChecked = [
    "data-[state='checked']:animate-slide-in",
    "data-[state='checked']:delay-200",
    "data-[state='checked']:ease-out",
  ].join(" ");

  const indicatorUnchecked = [
    "data-[state='unchecked']:animate-slide-out",
    "data-[state='unchecked']:delay-200",
    "data-[state='unchecked']:ease-out",
  ].join(" ");

  return (
    <CheckboxPrimitive.Root
      className={`${rootUnchecked} ${rootChecked}`}
      ref={forwardedRef}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        asChild
        className={`${indicatorUnchecked} ${indicatorChecked}`}
      >
        <CheckIcon className="w-5 h-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export const Checkbox = React.forwardRef(CustomCheckbox)