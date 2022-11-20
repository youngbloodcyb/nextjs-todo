import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Todo from '../components/Todo'
import { table, getMinifiedRecord } from './api/utils/Airtable';

export default function Home({initialTodos}) {
  console.log(initialTodos);
  return (
    <div className='h-screen'>
      <Nav />
      <div className="w-screen h-full font-mono flex flex-col justify-center items-center">
        <Link href="/">
          <h1 className='text-center py-4'>Welcome</h1>
        </Link>
          <ul className='flex flex-col gap-3'>
            {initialTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
          </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: getMinifiedRecord(todos)
      }
    }
  } catch(err) {
    console.error(err);
    return {
      props: {
        err: "Something went wrong"
      }
    }
  }
}
