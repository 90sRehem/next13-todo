import { NextResponse } from "next/server";
import { findTodo } from "../useCases";
import { toggleTodo } from "../useCases/toggleTodo";
import { removeTodo } from "../useCases/removeTodo";
import { revalidatePath } from "next/cache";

export async function GET(_request: Request, context: { params: { slug: string } }) {
  try {
    const todo = await findTodo({
      slug: context.params.slug
    });

    if (!todo) {
      return NextResponse.json({
        error: `${context.params.slug} not found`
      }, {
        status: 404,
        statusText: "Not Found"
      })
    }

    return NextResponse.json(todo, {
      status: 200,
      statusText: "OK"
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Something went wrong"
    }, {
      status: 500,
      statusText: "Internal Server Error"
    })
  }
}

export async function PATCH(_request: Request, context: { params: { slug: string } }) {
  return toggleTodo({
    slug: context.params.slug,
  })
}

export async function DELETE(_request: Request, context: { params: { slug: string } }) {
  try {
    const todo = await findTodo({
      slug: context.params.slug
    });

    if (!todo) {
      return NextResponse.json({
        error: `${context.params.slug} not found`
      }, {
        status: 404,
        statusText: "Not Found"
      })
    }

    await removeTodo({
      slug: context.params.slug
    });

    revalidatePath("/");

    return new Response(null, { 
      status: 204,
      statusText: "No Content"  
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Something went wrong"
    }, {
      status: 500,
      statusText: "Internal Server Error"
    })
  }
}