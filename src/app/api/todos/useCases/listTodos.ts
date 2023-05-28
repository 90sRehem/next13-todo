"use server"
import { prisma } from "@/lib/prisma";
import { todoOutputSchema } from "../schema";

export async function listTodos() {
  const todos = await prisma.todo.findMany();
  const returnValue = todoOutputSchema.safeParse(todos);
  if (!returnValue.success) {
    throw new Error(returnValue.error.message);
  }  
  return returnValue.data;
}