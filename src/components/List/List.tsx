import { ListHeading } from "./ListHeader";
import { ListItem } from "./ListItem";
import { EmptyList } from "./EmptyList";
import { prisma } from "@/lib/prisma";
import { FindTodoDTO, todoOutputSchema } from "@/schema";
import { revalidatePath } from "next/cache";

export async function List() {
  async function listTodos() {
    const todos = await prisma.todo.findMany();
    const returnValue = todoOutputSchema.safeParse(todos);
    if (!returnValue.success) {
      throw new Error(returnValue.error.message);
    }  
    return returnValue.data;
  }
  
  async function toggleTodo({ slug }: FindTodoDTO) {
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
  
  async function removeTodo({ slug }: FindTodoDTO) {
    await prisma.todo.delete({
         where: {
             slug
         }       
     })
     revalidatePath("/");   
  }

  const todos = await listTodos();

  return (
    <div className='flex flex-col items-center w-full max-w-3xl gap-6'>
      <ListHeading done={todos.filter(todo => todo.done).length} total={todos.length} />
      <ul className='flex flex-col items-center justify-center gap-4 w-full p-1 rounded-lg border-t-2 border-solid border-base-gray-400 outline-none'>
        {todos.length > 0 ? (
          todos.map(todo => (
            /* @ts-expect-error */
            <ListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </div>
  )
}