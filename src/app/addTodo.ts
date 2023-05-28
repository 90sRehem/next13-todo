"use server";
import { prisma } from "@/lib/prisma";
import { createTodoSchema } from "./api/todos";

export async function addTodo(data: FormData, onError: (error: Record<string, string[]>) => void) {
    const todo = data.get("new-todo") as string;
    // await createTodo({
    //   title: todo,
    // });
  
    const validatedData = createTodoSchema.safeParse({
      title: todo,
    })
  
    if (!validatedData.success) {
      console.log(validatedData.error);
      onError(validatedData.error.flatten().fieldErrors);
      return validatedData.error.flatten().fieldErrors;
    } else {
      await prisma.todo.create({
        data: {
          title: todo,
          slug: todo.toLowerCase().replace(/\s/g, "-"),
        },
      });
  
    }
  
  
    // revalidatePath("/");
  }