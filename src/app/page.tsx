import { Inter } from 'next/font/google'
import { FieldSet, Form, List } from '../components'
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';
import { createTodoSchema } from "../schema";
import { prisma } from '@/lib/prisma';
import { slugify } from '@/utils';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  async function createTodo(title: string) {
    "use server"
    const input = createTodoSchema.safeParse({ title });
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

    await prisma.todo.create({
      data: {
        id: crypto.randomUUID(),
        title: input.data.title,
        slug: slugify(input.data.title)
      }
    });

    revalidatePath("/")
  }
  return (
    <main className={`${inter.className} flex flex-col items-center justify-center gap-12 p-4 w-full h-full`}>
      <Form>
        <FieldSet action={createTodo} />
      </Form>
      <Suspense fallback={<p>Carregando...</p>}>
        {/* @ts-expect-error */}
        <List />
      </Suspense>
    </main>
  )
}
