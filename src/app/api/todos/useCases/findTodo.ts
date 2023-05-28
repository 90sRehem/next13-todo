import { prisma } from "@/lib/prisma";
import { FindTodoDTO } from "../schema";

export async function findTodo(slug: FindTodoDTO) {
    const todo = await prisma.todo.findUnique({
        where: slug
    });

    return todo;
}