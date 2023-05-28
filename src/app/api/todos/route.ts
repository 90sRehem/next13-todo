import { NextResponse } from "next/server";
import { listTodos, createTodo } from "./useCases";
import { toggleTodo } from "./useCases/toggleTodo";

export async function GET(request: Request) {
  const todos = await listTodos();
  return NextResponse.json(todos, {
    status: 200,
    statusText: "OK",
  });
}

export async function POST(request: Request) {
  await createTodo(await request.json());
}

export async function HEAD(request: Request) { }

export async function PUT(request: Request, context: { params: { slug: string } }) {
  
}

export async function DELETE(request: Request) { }

export async function PATCH(request: Request) {

}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) { }