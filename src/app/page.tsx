import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Checkbox, DeleteButton, Form, IconButton, List, ListHeading } from './components'

const inter = Inter({ subsets: ['latin'] })

const todos = [{
  id: "1",
  title: "teste",
  done: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}]

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col items-center justify-center gap-12 p-4 w-full h-full`}>
      <Form>
        <fieldset className='flex flex-col gap-2 md:flex-row'>
          <Form.Input
            type='text'
            name='new-todo'
            placeholder='Criar uma nova tarefa'
          />
          <Button type='submit'>Criar</Button>
        </fieldset>
      </Form>
      <List todos={[]} />
    </main>
  )
}
