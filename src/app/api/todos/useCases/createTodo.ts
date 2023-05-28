import { prisma } from "@/lib/prisma";
import { CreateTodoDTO, createTodoSchema } from "../schema";

function slugify(title: string) {
    return title.toLowerCase().replace(/ /g, "-");
}

export async function createTodo(data: CreateTodoDTO) {
    const input = createTodoSchema.safeParse(data);
    if (!input.success) {
        throw new Error(input.error.message);
    }
    const todoExists = await prisma.todo.findFirst({
        where: {
            slug: slugify(input.data.title)
        }
    });

    if (todoExists) {
        throw new Error("Todo already exists"); 
    }

    const todo = await prisma.todo.create({
        data: {
            id: crypto.randomUUID(),
            title: input.data.title,
            slug: slugify(input.data.title)
        }
    });

    return todo;
}