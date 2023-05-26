import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  console.log(TodoItem)
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  try {
    await prisma.todo.update({ where: { id }, data: { complete } })
    console.log(id, complete)
  } catch (error) {
    console.log(id, "deleted")
  }
}

async function deleteTodo(id: string) {
  "use server"
  console.log('deleting', id)

  await prisma.todo.delete({ where: { id: id } })
}

export default async function Home() {
  const todos = await getTodos()
  return <>
    <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new"
      >
        New
      </Link>
    </header>
    <ul className="pl-4" >
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>

  </>
}
