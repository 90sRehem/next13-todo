import { toZod } from "tozod";
import { z } from "zod";
import { Todo as PrismaTodo } from "@prisma/client";

export const todoSchema: toZod<PrismaTodo> = z.late.object(() => ({
    id: z.string().uuid(),
    title: z.string()
        .nonempty("Title cannot be empty")
        .min(3, "Title must be at least 3 characters long"),
    done: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string().uuid().nullable(),
    slug: z.string().nonempty(),
}))

export const createTodoSchema = todoSchema.pick({
    title: true
})

export const findTodoSchema = todoSchema.pick({
    slug: true
})

export const todoOutputSchema = z.array(todoSchema.omit({
    userId: true,
    id: true
}))

export type Todo = z.infer<typeof todoSchema>
export type CreateTodoDTO = z.infer<typeof createTodoSchema>
export type TodoOutputDTO = z.infer<typeof todoOutputSchema>
export type FindTodoDTO = z.infer<typeof findTodoSchema>