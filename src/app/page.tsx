import { Inter } from 'next/font/google'
import { FieldSet, Form, List } from '../components'
import { revalidatePath } from 'next/cache';
import { createTodo } from './api/todos';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  async function addTodo(title: string) {
    "use server";
    try {
      await createTodo({ title })

      revalidatePath("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className={`${inter.className} flex flex-col items-center justify-center gap-12 p-4 w-full h-full`}>
      <Form>
        <FieldSet action={addTodo} />
      </Form>
      {/* @ts-expect-error */}
      <List />
    </main>
  )
}
