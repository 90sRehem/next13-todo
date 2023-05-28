import { prisma } from "@/lib/prisma";
import { FindTodoDTO } from "../schema";
import { revalidatePath } from "next/cache";

export async function toggleTodo({ slug }: FindTodoDTO) {
    "use server";
    const todo = await prisma.todo.findUnique({
      where: {
        slug,
      },
    });

    if (todo) {
      await prisma.todo.update({
        where: {
          slug,
        },
        data: {
          done: !todo.done,
        },
      });
      revalidatePath("/");
    }
}