"use server";
import { revalidatePath } from "next/cache";
import { FindTodoDTO } from "../schema";
import { prisma } from "@/lib/prisma";

export async function removeTodo({ slug }: FindTodoDTO) {
   await prisma.todo.delete({
        where: {
            slug
        }       
    })
    revalidatePath("/");   
}